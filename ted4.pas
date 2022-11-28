{Luciano Kehl Nantal}
program TED4;
    const
        tam = 150;
    type 
        prod = record
                    nome: string;
                    cod: integer;
                    preco: real;
                    quantidade: integer;
                end;
                
    var 
        produtos: array [1..tam] of prod;
        alunosMedia: array [1..tam] of real;
        i, pos, cont, quanti: integer;
        somador, media, maior: real;
        resp: string;
    {media do precos}    
    function mediaP(somador : real; cont : integer) : real;
        var media : real;
        begin
            media:= somador/cont;
            mediaP := media;
        end;     
    {Leitura de dados}   
    procedure leitura(resp : string); 
        var i : integer;
        begin
            for i:=1 to tam do
                begin
                    if (resp = 's') or (cont = tam) then
                        begin 
                            writeln('Nome do produto: '); readln(produtos[i].nome);
                            writeln('Codigo do produto: '); readln(produtos[i].cod);
                            writeln('preco do produto: '); readln(produtos[i].preco);
                            writeln('Quandidade do produto em estoque: '); readln(produtos[i].quantidade);
                            writeln('incluir novo produto? s para sim / n para nao'); readln(resp); 
                            cont:= cont+1;
                            somador:= somador + produtos[i].preco;
                        end;
                end;
        end; 
    {Procura falta de produtos}    
     procedure falta(valorQ : integer; i: integer);
        begin
            if valorQ = 0 then
                writeln('O produto: ', produtos[i].nome , ' esta em falta no estoque ', ' e seu codigo e: ',produtos[i].cod);
        end;     
begin
    resp:= 's';
    somador:= 0;
    cont:= 0;
    leitura(resp);
    
    media:= mediaP(somador, cont);
    writeln('A media de todos os produtos registrados: ', media:0:2);
    for i:=1 to cont do 
        begin
            quanti:= produtos[i].quantidade;
            falta(quanti, i);
        end;
        
end.

