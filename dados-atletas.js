class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return "Infantil";
    } else if (this.idade >= 12 && this.idade <= 13) {
      return "Juvenil";
    } else if (this.idade >= 14 && this.idade <= 15) {
      return "Intermediário";
    } else if (this.idade >= 16 && this.idade <= 30) {
      return "Adulto";
    } else {
      return "Sem categoria";
    }
  }

  calculaIMC() {
    const imc = this.peso / (this.altura * this.altura);
    return imc.toFixed(14).replace('.', ',');
  }

  calculaMediaValida() {
    // Ordenar as notas em ordem decrescente
    const notasOrdenadas = [...this.notas].sort((a, b) => b - a);
    
    // Remover a maior e a menor nota
    notasOrdenadas.pop(); // Remove a menor
    notasOrdenadas.shift(); // Remove a maior
    
    // Calcular a média das notas restantes
    const soma = notasOrdenadas.reduce((acc, nota) => acc + nota, 0);
    const media = (soma / notasOrdenadas.length).toFixed(8);
    return media.replace('.', ',');
  }

  obtemNomeAtleta() {
    return this.nome;
  }

  obtemIdadeAtleta() {
    return this.idade;
  }

  obtemPesoAtleta() {
    return this.peso;
  }

  obtemNotasAtleta() {
    return this.notas;
  }

  obtemCategoria() {
    return this.calculaCategoria();
  }

  obtemIMC() {
    return this.calculaIMC();
  }

  obtemMediaValida() {
    return this.calculaMediaValida();
  }
}

// Exemplo de uso
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome:", atleta.obtemNomeAtleta());
console.log("Idade:", atleta.obtemIdadeAtleta());
console.log("Peso:", atleta.obtemPesoAtleta());
console.log("Altura:", String(atleta.altura).replace('.', ','));
console.log("Notas:", atleta.obtemNotasAtleta().join(','));
console.log("Categoria:", atleta.obtemCategoria());
console.log("IMC:", atleta.obtemIMC());
console.log("Média válida:", atleta.obtemMediaValida());