@echo off
REM Regenera modulo-*.html a partir de conteudo_fonte\*.md (usa o Perl que vem com o Git for Windows)
set PERL1=%LOCALAPPDATA%\Programs\Git\usr\bin\perl.exe
set PERL2=C:\Program Files\Git\usr\bin\perl.exe
if exist "%PERL1%" ( "%PERL1%" "%~dp0tools\build_modulos.pl" & goto fim )
if exist "%PERL2%" ( "%PERL2%" "%~dp0tools\build_modulos.pl" & goto fim )
echo Perl do Git nao encontrado. Instale o Git for Windows.
:fim
pause
