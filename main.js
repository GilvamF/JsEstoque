let n1 = 1
    let estoque = 0
    let dinheiro = 0
    
    function sistemadeestoque() {
        while (n1 == 1){
            dinheiro = parseInt(prompt("Digite o saldo inicial de Dinheiro:"));
            document.write("Saldo inicial: " + dinheiro + "<br>");
            n1 = 2;
            while (n1 == 2){
                let entrada = parseInt(prompt("Digite o tipo de entrada (1 - Compra, 2 - Venda, 3 - Finalizar):"));
                n1 = 3;
                    if (entrada == 1){
                        let compra = parseInt(prompt("Digite a quantidade de itens Que deseja compra:"));
                        if (dinheiro >= compra){
                            estoque = estoque + compra;
                            dinheiro = dinheiro - compra;
                            alert("Compra Finalizada o seu estoque é de " + estoque + " Itens é seu saldo é de " + dinheiro);
                            document.write("Compra: " + compra + "<br> Saldo: " + dinheiro + "<br>");
                            n1 = 2;
                            continue;
                        }
                        if (dinheiro < compra){
                            alert("Saldo Insuficiente , Seu Saldo é de " + dinheiro);
                            document.write("Saldo Insuficiente <br>");
                            n1 = 2;
                        }
                    }
                    if (entrada == 2){
                        let venda = parseInt(prompt("Digite a quantidade de itens Que deseja vender vc tem " + estoque + " Itens"));
                        if (venda <= estoque){
                            estoque = estoque - venda
                            dinheiro = dinheiro + venda;
                            alert("Venda Finalizada o seu estoque é de " + estoque + " Itens é seu saldo é de " + dinheiro);
                            document.write("Venda: " + venda + "<br> Saldo: " + dinheiro + "<br>");
                            n1 = 2;
                            continue;
                        }
                        if (venda > estoque){
                            alert("Estoque Insuficiente , Seu Estoque é de " + estoque);
                            document.write("Estoque Insuficiente <br>");
                        n1 = 2;
                        }
                    }
                    if (entrada == 3){
                        n1 = 10
                    }
                }
    
        }        
    }
    
sistemadeestoque();