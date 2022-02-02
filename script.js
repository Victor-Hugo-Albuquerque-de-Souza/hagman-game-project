
            var pala=[];
            var letr;
            var controleDiv;
            var mudaDisplay;
            var contaDvErros=0;
            var contaErros=0;
            var tempo;
              
            var pala=prompt("Insira a palavra a ser descoberta:");

            function configPalavra (){
                controleDiv=pala.length;
                for (i=0; i<controleDiv; i++){
                    document.getElementById('caixaLetra' + i).style.display="inline";
                }
            }

            function getAllIndexes(){
                letr = document.getElementById('caracter').value;
                var contaErros=0;
                for (var i=0; i<pala.length; i++){
                     if (letr==pala[i]){
                        document.getElementById('caixaLetra'+i).innerHTML=letr;
                        contaErros++;
                     }  
                }  
                if(contaErros==0){
                    document.getElementById('caixaErros' + contaDvErros).style.display="inline";
                    document.getElementById('caixaErros' + contaDvErros).innerHTML=letr;
                    document.getElementById('part' + contaDvErros).style.visibility="visible";
                    document.getElementById('teste').innerHTML=contaDvErros;
                    contaDvErros++;                        
                }
                    
                if(contaDvErros>5){
                    var resposta= confirm("A resposta era: "+ pala + "\nVocê perdeu. Começar de novo?");
                        if(resposta===true){
                            window.reload();
                        }
                }
            }

            window.addEventListener("load", configPalavra);
            