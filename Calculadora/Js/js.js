        var cifra = "";
        var acumulado = 0;
        var primera = true;
        var sumar = false;
        var restar = false;
        var multiplicar = false;
        var dividir = false;
        var potenciar = false;
        var raizcuadrada = false;
        var decimalo = false;
        var entero = 0;
        var numero = 0;
        var borrarpun = false;
        var borrarsum = false;
        var borrarres = false;
        var borrarpro = false;
        var borrardiv = false;
        var borrarpot = false;
        var borrarrai = false;
        var borrarnum = false;


        function display_numeros(numero){
            document.getElementById("display").value=cifra+numero
            cifra=document.getElementById("display").value;       
            borrarpun = false;
            borrarsum = false;
            borrarres = false;
            borrarpro = false;
            borrardiv = false;
            borrarpot = false;
            borrarrai = false;
            borrarnum = true;
        }

        function suma(){
            if(decimalo){
                var largo = 0; 
                largo = cifra.length;
                acumulado = (entero + (cifra/(10**largo)));
                document.getElementById("display").value=acumulado;
                decimalo=false;
                cifra="";
            }
            else if (restar){
                acumulado=acumulado-parseFloat(cifra);
            }
            else {
                acumulado=acumulado+parseFloat(cifra)
            }
            document.getElementById("display").value="+";
            cifra="";
            sumar = true;
            restar = false;
            multiplicar = false;
            dividir = false;
            potenciar = false;
            raizcuadrada = false;
            primera = false;
            decimalo = false;
            borrarpun = false;
            borrarsum = true;
            borrarres = false;
            borrarpro = false;
            borrardiv = false;
            borrarpot = false;
            borrarrai = false;
            borrarnum = false;
        }

        function resta(){
            if(decimalo){
                var largo = 0; 
                largo = cifra.length;
                acumulado = (entero + (cifra/(10**largo)));
                document.getElementById("display").value=acumulado;
                decimalo=false;
                cifra="";
            }
            if (cifra=="" && acumulado==0){
                acumulado=0;
                cifra=0;
            }

            if (sumar){
                acumulado=acumulado+parseFloat(cifra)
            }
            else if (primera){
                acumulado=parseFloat(cifra);
                primera=false;
            }
            else{
                acumulado=acumulado-parseFloat(cifra)
            }
            document.getElementById("display").value="-";
            cifra="";
            sumar = false;
            restar = true;
            multiplicar = false;
            dividir = false;
            potenciar = false;
            raizcuadrada = false;
            primera = false;
            decimalo = false;       
            borrarpun = false;
            borrarsum = false;
            borrarres = true;
            borrarpro = false;
            borrardiv = false;
            borrarpot = false;
            borrarrai = false;
            borrarnum = false;
        }

        function producto(){
            if(decimalo){
                var largo = 0; 
                largo = cifra.length;
                acumulado = (entero + (cifra/(10**largo)));
                document.getElementById("display").value=acumulado;
                decimalo=false;
                cifra="";
            }
            else {
                acumulado=acumulado+parseFloat(cifra);
            }
            document.getElementById("display").value="*";
            cifra="";
            sumar = false;
            restar = false;
            multiplicar = true;
            dividir = false;
            potenciar = false;
            raizcuadrada = false;
            primera = false;
            decimalo = false;       
            borrarpun = false;
            borrarsum = false;
            borrarres = false;
            borrarpro = true;
            borrardiv = false;
            borrarpot = false;
            borrarrai = false;
            borrarnum = false;
        }

        function cociente(){
            if(decimalo){
                var largo = 0; 
                largo = cifra.length;
                acumulado = (entero  + (cifra/(10**largo)));
                document.getElementById("display").value=acumulado;
                decimalo=false;
                cifra="";
            }
            else {
                acumulado=acumulado+parseFloat(cifra)
            }
            document.getElementById("display").value="/";
            cifra="";
            sumar = false;
            restar = false;
            multiplicar = false;
            dividir = true;
            potenciar = false;
            raizcuadrada = false;
            primera = false;
            decimalo = false;       
            borrarpun = false;
            borrarsum = false;
            borrarres = false;
            borrarpro = false;
            borrardiv = true;
            borrarpot = false;
            borrarrai = false;
            borrarnum = false;
        }

        function potencia(){
            if(decimalo){
                var largo = 0; 
                largo = cifra.length;
                acumulado = (entero  + (cifra/(10**largo)));
                document.getElementById("display").value=acumulado;
                decimalo=false;
                cifra="";
            }
            else{
                acumulado=acumulado+parseFloat(cifra);
            }
            document.getElementById("display").value="^";
            cifra="";
            sumar = false;
            restar = false;
            multiplicar = false;
            dividir = false;
            potenciar = true;
            raizcuadrada = false;
            primera = false;
            decimalo = false;       
            borrarpun = false;
            borrarsum = false;
            borrarres = false;
            borrarpro = false;
            borrardiv = false;
            borrarpot = true;
            borrarrai = false;
            borrarnum = false;
        }

        function raiz(){
            if(decimalo){
                var largo = 0; 
                largo = cifra.length;
                acumulado = (entero  + (cifra/(10**largo)));
                document.getElementById("display").value=acumulado;
                decimalo=false;
                cifra="";
            }
            else{
                acumulado=acumulado+parseFloat(cifra);
            }
            document.getElementById("display").value="√";
            cifra="";
            sumar = false;
            restar = false;
            multiplicar = false; 
            dividir = false;
            potenciar = false;
            raizcuadrada = true;
            primera = false;
            decimalo = false;       
            borrarpun = false;
            borrarsum = false;
            borrarres = false;
            borrarpro = false;
            borrardiv = false;
            borrarpot = false;
            borrarrai = true;
            borrarnum = false;
        }


        function resultado(){
            if(decimalo){
                var numero = 0;
                var largo = 0;
                largo = cifra.length;
                numero = (entero + (cifra/(10**largo)));
                decimalo=false;
                cifra=numero;
                document.getElementById("display").value=cifra;
            }
            if (sumar) {
                document.getElementById("display").value=acumulado+parseFloat(cifra)
            }
            else if (restar) {
                document.getElementById("display").value=acumulado-parseFloat(cifra)
            }
            else if (multiplicar) {
                acumulado=acumulado*parseFloat(cifra);
                document.getElementById("display").value=acumulado
            }
            else if (dividir) {
                acumulado=acumulado/parseFloat(cifra);
                document.getElementById("display").value=acumulado
            }
            else if (potenciar) {
                acumulado=acumulado**parseFloat(cifra);
                document.getElementById("display").value=acumulado
            }
            else if (raizcuadrada){
                if (acumulado<0){
                    document.getElementById("display").value="Syntax Error Puto";
                }
                else {
                    acumulado=acumulado**(1/parseFloat(cifra));
                    document.getElementById("display").value=acumulado
                }
            }
            acumulado=parseFloat(document.getElementById("display").value);
            cifra="";
            sumar = false;
            restar = false;
            multiplicar = false; 
            dividir = false;
            potenciar = false;
            raizcuadrada = false;
            primera = false;
            decimalo = false;
        }

        function reset(){
            acumulado=0;
            cifra="";
            sumar = false;
            restar = false;
            multiplicar = false; 
            dividir = false;
            potenciar = false;
            raizcuadrada = false;
            primera = true;
            decimalo = false;        
            borrarpun = false;
            borrarsum = false;
            borrarres = false;
            borrarpro = false;
            borrardiv = false;
            borrarpot = false;
            borrarrai = false;
            borrarnum = false;
            document.getElementById("display").value=0;

        }

        function borrar(){
            if (borrarpun){
                decimalo = false;
                cifra = entero.toString;
                entero = 0;
                document.getElementById("display").value=cifra;
            }
            else if (acumulado==0 && cifra==""){
                primera = true;
                document.getElementById("display").value=acumulado;
            }
            else if (borrarsum){
                sumar = false;
                document.getElementById("display").value=acumulado;
            }
            if (borrarres){
                restar = false;
                document.getElementById("display").value=acumulado;
            }
            else if (borrarpro){
                multiplicar = false;
                document.getElementById("display").value=acumulado;
            }
            else if (borrardiv){
                dividir = false;
                document.getElementById("display").value=acumulado;
            }
            else if (borrarpot){
                potenciar = false;
                document.getElementById("display").value=acumulado;
            }
            else if (borrarrai){
                raizcuadrada = false;
                document.getElementById("display").value=acumulado;
            }
            else if (borrarnum){
                cifra = cifra.slice(0, cifra.length - 1);
                document.getElementById("display").value=cifra;
            }
        }

        function decimal(){
            entero=parseFloat(cifra);
            cifra="";
            decimalo = true;
            document.getElementById("display").value=".";       
            borrarpun = true;
            borrarsum = false;
            borrarres = false;
            borrarpro = false;
            borrardiv = false;
            borrarpot = false;
            borrarrai = false;
            borrarnum = false;
        }