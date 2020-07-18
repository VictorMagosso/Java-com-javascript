import java.util.ArrayList;

public class Main{
    public static void main (String... args){
        ArrayList<User> listaUser = new ArrayList<>();
        
        User user = new User("Victor", 24);
        User user2 = new User("Johnatan", 29);
        User user3 = new User("Marcelo", 35);
        
        listaUser.add(user);
        listaUser.add(user2);
        listaUser.add(user3);
        System.out.println(listaUser);
    }
}