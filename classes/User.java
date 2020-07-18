public class User{
    String nome;
    int idade;

    public User (String nome, int idade){
        this.nome = nome;
        this.idade = idade;
    }
    public String getNome(){
        return nome;
    }
    public int getIdade(){
        return idade;
    }
    @Override
    public String toString(){
        return "\nUser - nome: " + nome + " idade: " + idade + "";
    }
}