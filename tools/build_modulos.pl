#!/usr/bin/perl
# ============================================================================
# build_modulos.pl
# Converte conteudo_fonte/*.md em modulo-*.html (3 niveis, indice, tabelas...).
# Uso (Git Bash):   perl tools/build_modulos.pl
# Uso (Windows):    construir_modulos.bat
# ----------------------------------------------------------------------------
# SINTAXE DOS ARQUIVOS .md
#   Cabecalho (entre ---): id, arquivo, titulo, curto, pontos, badge, intro,
#                          quiz_badge, meta_desc
#   @@MAPA                 -> mapa de cobertura do edital (acordeao no topo)
#   @@NIVEL 1 | Titulo     -> inicia um nivel (1, 2 ou 3)
#   ## Titulo {#id}        -> novo cartao de topico (numerado automaticamente)
#   ### / ####             -> subtitulos
#   :::tipo Titulo ... :::  -> caixas: base tip pegadinha lei hospital
#                              mnemonic intro radar (linhas "Titulo :: texto")
#   +++ Titulo ... +++     -> acordeao (details)
#   | a | b |              -> tabelas (2a linha: |---|---|)
#   - item / 1. item       -> listas (recuo de 2 espacos = sublista)
#   **negrito** __italico__ `codigo` ==destaque-lei== !!alerta!!  \\ = quebra
# ============================================================================
use strict;
use warnings;
use utf8;
use FindBin qw($Bin);

binmode(STDOUT, ':encoding(UTF-8)');
binmode(STDERR, ':encoding(UTF-8)');

my $root = "$Bin/..";
my @files = sort glob("$root/conteudo_fonte/*.md");
die "Nenhum .md em conteudo_fonte/\n" unless @files;

sub esc {
    my $s = shift;
    $s =~ s/&/&amp;/g; $s =~ s/</&lt;/g; $s =~ s/>/&gt;/g;
    return $s;
}

sub inline {
    my $s = esc(shift);
    my @code;
    $s =~ s/`([^`]+)`/push(@code,$1); "\x01".$#code."\x01"/ge;
    $s =~ s/\*\*(.+?)\*\*/<b>$1<\/b>/g;
    $s =~ s/\[([^\]]+)\]\(([^)\s]+)\)/<a href="$2">$1<\/a>/g;
    $s =~ s/__(.+?)__/<em>$1<\/em>/g;
    $s =~ s/==(.+?)==/<span class="badge-law">$1<\/span>/g;
    $s =~ s/!!(.+?)!!/<span class="highlight-danger">$1<\/span>/g;
    $s =~ s/\\\\/<br>/g;
    $s =~ s/\x01(\d+)\x01/<code>$code[$1]<\/code>/g;
    return $s;
}

# Captura linhas ate o fechamento correspondente (suporta aninhamento)
sub grab {
    my ($L, $start, $open_re, $close_re) = @_;
    my $depth = 1; my @body; my $j = $start;
    for (; $j < @$L; $j++) {
        if ($L->[$j] =~ $open_re)      { $depth++; }
        elsif ($L->[$j] =~ $close_re)  { $depth--; last if $depth == 0; }
        push @body, $L->[$j];
    }
    return (\@body, $j + 1);
}

my %ICON = (base => "\x{1F331}", tip => "\x{1F4A1}", pegadinha => "\x{1F6A8}",
            lei => "\x{2696}\x{FE0F}", hospital => "\x{1F3E5}");

sub is_special {
    my $l = shift;
    return $l =~ /^(:::\w|\+\+\+\s+\S|#{3,4}\s|\|)/ || $l =~ /^\s*(-|\d+\.)\s+/;
}

sub render_blocks {
    my @L = @{ $_[0] };
    my $html = ''; my $i = 0;
    while ($i < @L) {
        my $line = $L[$i];
        if ($line =~ /^\s*$/) { $i++; next; }

        if ($line =~ /^:::(\w+)\s*(.*)$/) {
            my ($type, $title) = ($1, $2);
            my ($body, $ni) = grab(\@L, $i + 1, qr/^:::\w/, qr/^:::\s*$/);
            $i = $ni;
            if ($type eq 'mnemonic') {
                $html .= "<div class=\"mnemonic\"><div>" . render_blocks($body) . "</div></div>\n";
            } elsif ($type eq 'intro') {
                $html .= "<div class=\"level-intro\">" . render_blocks($body) . "</div>\n";
            } elsif ($type eq 'radar') {
                $html .= "<div class=\"radar-banca\">";
                for my $r (@$body) {
                    next unless $r =~ /^(.+?)\s*::\s*(.+)$/;
                    $html .= "<div><b>" . inline($1) . "</b>" . inline($2) . "</div>";
                }
                $html .= "</div>\n";
            } else {
                my $icon = $ICON{$type} || $ICON{tip};
                my $t = $title ne '' ? "<strong>" . inline($title) . "</strong>" : '';
                $html .= "<div class=\"callout callout-$type\"><div class=\"callout-icon\">$icon</div>"
                       . "<div class=\"callout-body\">$t" . render_blocks($body) . "</div></div>\n";
            }
            next;
        }

        if ($line =~ /^\+\+\+\s+(\S.*)$/) {
            my $title = $1;
            my ($body, $ni) = grab(\@L, $i + 1, qr/^\+\+\+\s+\S/, qr/^\+\+\+\s*$/);
            $i = $ni;
            $html .= "<details class=\"topic\"><summary>" . inline($title) . "</summary>"
                   . "<div class=\"topic-body\">" . render_blocks($body) . "</div></details>\n";
            next;
        }

        if ($line =~ /^####\s+(.*)$/) { $html .= "<h4>" . inline($1) . "</h4>\n"; $i++; next; }
        if ($line =~ /^###\s+(.*)$/)  { $html .= "<h3>" . inline($1) . "</h3>\n"; $i++; next; }

        if ($line =~ /^\|/) {
            my @rows;
            while ($i < @L && $L[$i] =~ /^\|/) { push @rows, $L[$i]; $i++; }
            my @cells = map {
                my $r = $_; $r =~ s/^\|//; $r =~ s/\|\s*$//;
                [ map { s/^\s+|\s+$//gr } split(/\|/, $r, -1) ]
            } @rows;
            my $head = shift @cells;
            shift @cells if @cells && join('', @{$cells[0]}) =~ /^[\s:\-]+$/;
            $html .= "<div class=\"table-wrap\"><table class=\"study-table\"><thead><tr>"
                   . join('', map { "<th>" . inline($_) . "</th>" } @$head) . "</tr></thead><tbody>";
            for my $c (@cells) {
                $html .= "<tr>" . join('', map { "<td>" . inline($_) . "</td>" } @$c) . "</tr>";
            }
            $html .= "</tbody></table></div>\n";
            next;
        }

        if ($line =~ /^\s*(-|\d+\.)\s+/) {
            my $ordered = ($line =~ /^\s*\d+\./) ? 1 : 0;
            my @items;
            while ($i < @L) {
                my $l = $L[$i];
                if ($l =~ /^(\s*)(-|\d+\.)\s+(.*)$/) {
                    if (length($1) >= 2 && @items) { push @{ $items[-1]{sub} }, $3; }
                    else { push @items, { text => $3, sub => [] }; }
                    $i++;
                } elsif ($l =~ /^\s{2,}\S/ && @items) {
                    my $t = $l; $t =~ s/^\s+//;
                    if (@{ $items[-1]{sub} }) { $items[-1]{sub}[-1] .= " $t"; }
                    else { $items[-1]{text} .= " $t"; }
                    $i++;
                } else { last; }
            }
            my $tag = $ordered ? 'ol' : 'ul';
            $html .= "<$tag>";
            for my $it (@items) {
                $html .= "<li>" . inline($it->{text});
                if (@{ $it->{sub} }) {
                    $html .= "<ul>" . join('', map { "<li>" . inline($_) . "</li>" } @{ $it->{sub} }) . "</ul>";
                }
                $html .= "</li>";
            }
            $html .= "</$tag>\n";
            next;
        }

        my @para;
        while ($i < @L && $L[$i] !~ /^\s*$/ && !is_special($L[$i])) { push @para, $L[$i]; $i++; }
        if (@para) { $html .= "<p>" . inline(join(' ', @para)) . "</p>\n"; }
        else { $i++; }
    }
    return $html;
}

sub render_level {
    my ($n, $lines) = @_;
    my (@pre, @cards, $cur);
    for my $l (@$lines) {
        if ($l =~ /^##\s+(.*?)(?:\s*\{#([\w-]+)\})?\s*$/ && $l !~ /^###/) {
            $cur = { title => $1, id => $2, body => [] };
            push @cards, $cur;
        } elsif ($cur) { push @{ $cur->{body} }, $l; }
        else { push @pre, $l; }
    }
    my $idx = 0;
    for my $c (@cards) { $idx++; $c->{n} = $idx; $c->{id} = "n$n-" . ($c->{id} || "t$idx"); }

    my $out = render_blocks(\@pre);
    $out .= "<nav class=\"study-toc\" id=\"topo-nivel-$n\"><strong>\x{1F4D1} \x{CD}ndice do N\x{ED}vel $n \x{2022} " . scalar(@cards) . " t\x{F3}picos</strong><ol>";
    $out .= join('', map { "<li><a href=\"#$_->{id}\">" . inline($_->{title}) . "</a></li>" } @cards);
    $out .= "</ol></nav>\n";
    for my $c (@cards) {
        $out .= "<article class=\"card-content\" id=\"$c->{id}\"><h2>$c->{n}. " . inline($c->{title}) . "</h2>\n"
              . render_blocks($c->{body})
              . "<span class=\"back-to-top\"><a href=\"#topo-nivel-$n\">\x{2191} voltar ao \x{ED}ndice</a></span></article>\n";
    }
    return ($out, scalar(@cards));
}

sub build_page {
    my ($file) = @_;
    open(my $fh, '<:encoding(UTF-8)', $file) or die "Nao abriu $file: $!";
    my $raw = do { local $/; <$fh> }; close($fh);
    $raw =~ s/\r\n/\n/g;
    $raw =~ s/^\x{FEFF}//;

    my %m;
    die "Cabecalho ausente em $file\n" unless $raw =~ s/^---\n(.*?)\n---\n//s;
    for my $l (split /\n/, $1) { $m{$1} = $2 if $l =~ /^(\w+):\s*(.*)$/; }
    for my $k (qw(id arquivo titulo curto pontos badge intro quiz_badge)) {
        die "Campo '$k' ausente em $file\n" unless defined $m{$k};
    }

    my (%level, $mapa, $mode, $lv);
    my @cur;
    my $flush = sub {
        return unless defined $mode;
        if ($mode eq 'mapa') { $mapa = [@cur]; } else { $level{$lv} = [@cur]; }
        @cur = ();
    };
    for my $l (split /\n/, $raw) {
        if ($l =~ /^\@\@MAPA\s*$/)                 { $flush->(); $mode = 'mapa'; next; }
        if ($l =~ /^\@\@NIVEL\s+(\d)\s*\|\s*(.*)$/) { $flush->(); $mode = 'nivel'; $lv = $1; next; }
        push @cur, $l;
    }
    $flush->();

    my $desc = $m{meta_desc} || $m{intro};
    $desc =~ s/"/&quot;/g;
    my $mapa_html = '';
    if ($mapa) {
        $mapa_html = "<details class=\"topic\" style=\"margin-bottom:1.5rem\"><summary>\x{1F5FA}\x{FE0F} Mapa de cobertura do edital: onde estudar cada item</summary>"
                   . "<div class=\"topic-body\">" . render_blocks($mapa) . "</div></details>\n";
    }

    my $levels_html = ''; my %count;
    my %tabs = (1 => "\x{1F331} Base Descomplicada", 2 => "\x{1F33F} Conte\x{FA}do Mediado", 3 => "\x{1F333} Dom\x{ED}nio 100% Edital");
    for my $n (1, 2, 3) {
        die "Nivel $n ausente em $file\n" unless $level{$n};
        my ($h, $c) = render_level($n, $level{$n});
        $count{$n} = $c;
        my $active = $n == 1 ? ' active' : '';
        $levels_html .= "<section id=\"level-content-$n\" class=\"level-content$active\">\n$h</section>\n\n";
    }

    my $tabs_html = '';
    for my $n (1, 2, 3) {
        my $active = $n == 1 ? ' active' : '';
        $tabs_html .= "<button class=\"tab-btn$active\" data-level=\"$n\"><span class=\"tab-badge\">N\x{ED}vel $n</span><span class=\"tab-name\">$tabs{$n}</span></button>\n";
    }

    my $title = esc($m{titulo}); my $curto = esc($m{curto});
    my $page = <<"HTML";
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>M\x{F3}dulo $curto | Dayana Maia - FHCGV Auxiliar Administrativo</title>
  <meta name="description" content="$desc">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <div id="scroll-progress-container"><div id="scroll-progress-bar"></div></div>

  <header class="site-header">
    <div class="header-container">
      <div class="brand-wrapper">
        <a href="materias.html" class="brand-icon" title="Voltar \x{E0}s mat\x{E9}rias">\x{2190}</a>
        <div class="brand-info">
          <div class="brand-title">$curto <span>$m{pontos}</span></div>
          <span class="user-badge">\x{2B50} Dayana Maia de Jesus \x{2022} Cargo 01</span>
        </div>
      </div>
      <div class="header-actions">
        <button id="font-decrease" class="btn-icon" title="Diminuir fonte">A-</button>
        <button id="font-increase" class="btn-icon" title="Aumentar fonte">A+</button>
        <button id="theme-toggle" class="btn-icon" title="Alternar modo">\x{1F319}</button>
      </div>
    </div>
  </header>

  <main class="main-wrapper">
    <div class="reading-container">

      <div style="margin-bottom: 1.5rem;">
        <span class="badge badge-primary" style="font-size: 0.8rem; margin-bottom: 0.5rem;">$m{badge}</span>
        <h1>$title</h1>
        <p style="color: var(--text-muted);">$m{intro}</p>
      </div>

$mapa_html
      <nav class="pedagogic-tabs" aria-label="N\x{ED}veis de Estudo">
$tabs_html      </nav>

$levels_html
      <section class="quiz-section" id="questoes">
        <div class="quiz-header">
          <h3><span>\x{1F3AF}</span> Banco Oficial do M\x{F3}dulo: $curto</h3>
          <span class="quiz-badge">$m{quiz_badge}</span>
        </div>
        <div id="modulo-questoes-container" data-disciplina="$m{id}"></div>
      </section>

      <div style="text-align: center; margin: 3rem 0 1rem;">
        <button class="btn btn-primary" onclick="markModuleComplete('$m{id}')">
          \x{2705} Concluir M\x{F3}dulo \x{26} Salvar Progresso
        </button>
      </div>

    </div>
  </main>

  <nav class="bottom-nav">
    <a href="index.html" class="bottom-nav-item">
      <span class="nav-icon">\x{1F5FA}\x{FE0F}</span>
      <span>Roteiro</span>
    </a>
    <a href="materias.html" class="bottom-nav-item active">
      <span class="nav-icon">\x{1F4DA}</span>
      <span>Mat\x{E9}rias</span>
    </a>
    <a href="modulo-discursiva.html" class="bottom-nav-item">
      <span class="nav-icon">\x{270D}\x{FE0F}</span>
      <span>Reda\x{E7}\x{E3}o</span>
    </a>
    <a href="simulados.html" class="bottom-nav-item">
      <span class="nav-icon">\x{1F3C6}</span>
      <span>Simulado</span>
    </a>
  </nav>

  <script src="js/questoes_data.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
HTML

    my $out = "$root/$m{arquivo}";
    open(my $oh, '>:encoding(UTF-8)', $out) or die "Nao gravou $out: $!";
    print $oh $page; close($oh);
    my $total = $count{1} + $count{2} + $count{3};
    printf "OK  %-26s  topicos N1=%d N2=%d N3=%d (total %d)  %d bytes\n",
        $m{arquivo}, $count{1}, $count{2}, $count{3}, $total, length($page);
}

build_page($_) for @files;
