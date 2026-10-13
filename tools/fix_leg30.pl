#!/usr/bin/perl
use strict;
use warnings;
use utf8;
use FindBin qw($Bin);

my $root = "$Bin/..";

# 1. Atualizar banco_questoes.csv
my $csv_file = "$root/banco_questoes.csv";
open(my $fh_in, '<:encoding(UTF-8)', $csv_file) or die "Erro abrindo $csv_file: $!";
my $csv_content = do { local $/; <$fh_in> };
close($fh_in);

my $old_csv_line = qr/"leg_30","legislacao".*?\n/s;
my $new_csv_line = qq{"leg_30","legislacao","Legislação do Estado do Pará","Lei Estadual nº 9.341/2021 - Estatuto da Equidade Racial do Pará","Nos termos da Lei Estadual nº 9.341/2021, que institui o Estatuto da Equidade Racial do Estado do Pará, considera-se população negra o conjunto de pessoas que se autodeclaram:","Pretas e pardas, conforme o quesito cor ou raça utilizado pela Fundação Instituto Brasileiro de Geografia e Estatística (IBGE).","Correto! A lei estadual acolhe expressamente a autodeclaração de pretos e pardos conforme o padrão oficial do IBGE para a definição de população negra.","Exclusivamente pretas de ascendência quilombola com certidão emitida por comunidade tradicional.","Incorreto. O conceito legal abrange pretos e pardos autodeclarados, não se restringindo a quilombolas.","Pardas e indígenas residentes exclusivamente em áreas rurais ou ribeirinhas do Estado do Pará.","Incorreto. A legislação foca na equidade racial da população negra (pretos e pardos) em todo o território paraense.","Cidadãos submetidos a vulnerabilidade socioeconômica independentemente de quesito de cor ou raça.","Incorreto. A equidade racial tem recorte étnico-racial explícito fundamentado na autodeclaração.","Afrodescendentes com comprovação documental pericial de ascendência genealógica direta.","Incorreto. O critério legal é a autodeclaração, não exigindo perícia documental genealógica.","A","A Lei Estadual nº 9.341/2021 define a população negra como o conjunto de pessoas que se autodeclaram pretas e pardas, conforme o quesito cor ou raça do IBGE, assegurando políticas afirmativas e acesso à saúde integral!"\n};

if ($csv_content =~ s/$old_csv_line/$new_csv_line/) {
    open(my $fh_out, '>:encoding(UTF-8)', $csv_file) or die "Erro gravando $csv_file: $!";
    print $fh_out $csv_content;
    close($fh_out);
    print "banco_questoes.csv: leg_30 atualizado com sucesso!\n";
} else {
    print "banco_questoes.csv: padrao nao encontrado.\n";
}

# 2. Atualizar js/questoes_data.js
my $js_file = "$root/js/questoes_data.js";
open(my $fh_js, '<:encoding(UTF-8)', $js_file) or die "Erro abrindo $js_file: $!";
my $js_content = do { local $/; <$fh_js> };
close($fh_js);

my $old_js_block = qr/\{\s*"id":\s*"leg_30".*?"comentarioGeral":\s*".*?"\s*\}/s;
my $new_js_block = qq{{
        "id":  "leg_30",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei Estadual nº 9.341/2021 - Estatuto da Equidade Racial do Pará",
        "enunciado":  "Nos termos da Lei Estadual nº 9.341/2021, que institui o Estatuto da Equidade Racial do Estado do Pará, considera-se população negra o conjunto de pessoas que se autodeclaram:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Pretas e pardas, conforme o quesito cor ou raça utilizado pela Fundação Instituto Brasileiro de Geografia e Estatística (IBGE).",
                                       "exp":  "Correto! A lei estadual acolhe expressamente a autodeclaração de pretos e pardos conforme o padrão oficial do IBGE para a definição de população negra."
                                   },
                             "B":  {
                                       "texto":  "Exclusivamente pretas de ascendência quilombola com certidão emitida por comunidade tradicional.",
                                       "exp":  "Incorreto. O conceito legal abrange pretos e pardos autodeclarados, não se restringindo a quilombolas."
                                   },
                             "C":  {
                                       "texto":  "Pardas e indígenas residentes exclusivamente em áreas rurais ou ribeirinhas do Estado do Pará.",
                                       "exp":  "Incorreto. A legislação foca na equidade racial da população negra (pretos e pardos) em todo o território paraense."
                                   },
                             "D":  {
                                       "texto":  "Cidadãos submetidos a vulnerabilidade socioeconômica independentemente de quesito de cor ou raça.",
                                       "exp":  "Incorreto. A equidade racial tem recorte étnico-racial explícito fundamentado na autodeclaração."
                                   },
                             "E":  {
                                       "texto":  "Afrodescendentes com comprovação documental pericial de ascendência genealógica direta.",
                                       "exp":  "Incorreto. O critério legal é a autodeclaração, não exigindo perícia documental genealógica."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "A Lei Estadual nº 9.341/2021 define a população negra como o conjunto de pessoas que se autodeclaram pretas e pardas, conforme o quesito cor ou raça do IBGE, assegurando políticas afirmativas e acesso à saúde integral!"
    }};

if ($js_content =~ s/$old_js_block/$new_js_block/) {
    open(my $fh_js_out, '>:encoding(UTF-8)', $js_file) or die "Erro gravando $js_file: $!";
    print $fh_js_out $js_content;
    close($fh_js_out);
    print "js/questoes_data.js: leg_30 atualizado com sucesso!\n";
} else {
    print "js/questoes_data.js: padrao nao encontrado.\n";
}
