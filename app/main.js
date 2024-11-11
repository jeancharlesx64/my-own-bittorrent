function decodeBencode(bencodedValue){
    if(!bencodedValue){
      throw new Error("Nenhum parâmetro foi passado!");
    }
  
    if(!isNaN(bencodedValue[0])){ 
      const firstColonIndex = bencodedValue.indexOf(":"); 
  
      if(firstColonIndex === -1){
        throw new Error("Código bencode inválido!"); 
      }
  
      return bencodedValue.substr(firstColonIndex + 1); 
  
    }else if(bencodedValue[0] === "i"){
      const firstColonIndex = bencodedValue.indexOf("i"); 
      const secondColonIndex = bencodedValue.indexOf("e");
  
      
      if(firstColonIndex === -1 || secondColonIndex === -1){
        throw new Error("Código bencode inválido!");
      }

      return bencodedValue.substring(firstColonIndex + 1, secondColonIndex); 

    }else{
      throw new Error("Código bencode inválido!")
    }
  
  }
  
  function main(){
    if(!process.argv[2]){
      throw new Error("Nenhum comando foi passado!");
    }
  
    const command = process.argv[2]; 
  
    if(command === "decode"){
      const bencodedValue = process.argv[3]; 
  
      console.log(JSON.stringify(decodeBencode(bencodedValue)));
    }else{
      throw new Error(`Comando ${command} não encontrado.`); 
    }
  }
  
  main();
  