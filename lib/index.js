var fs = require("fs");

//BIBLIOTECA GIT
//https://www.npmjs.com/package/simple-git
const simpleGit = require('simple-git');
const git = simpleGit();

function gitMirror (nome = 'novo_repositorio'){
  git.mirror("git@github.com:cesargos/Ex-Arquiterura-SOLID.git", nome);
  console.log(`repositorio cesargos/ex-arquitetura-solid foi clonado na pasta ${nome}`)
}


function criarArquivoTxt(nome = 'sem-nome'){
  var createStream = fs.createWriteStream(`${nome}.txt`);
  createStream.write(`Hello ${process.env.DEV || "Developer"}`);
  createStream.end();
  console.log(`Arquivo ${nome} criado!`)
}

function criarPasta(nome = 'pasta-sem-nome'){
  if (!fs.existsSync(nome)){
    fs.mkdir(nome,(err)=>{
      if (err){
        console.log('Deu ruim u.U');
        return;
      }
      console.log("Diretorio criado! :)")
    })
  }
}

module.exports = {criarArquivoTxt, criarPasta, gitMirror };