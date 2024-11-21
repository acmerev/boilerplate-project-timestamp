import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Formateando {

    public static void main(String[] args) {
        LocalDateTime hoy = LocalDateTime.now();
        System.out.println(hoy);

        DateTimeFormatter formateador = DateTimeFormatter.ofPattern("dd/MM/yyyy hh:mm:ss");
        DateTimeFormatter formatoNew = DateTimeFormatter.ofPattern("dd MM yyyy");
        LocalDateTime ahora = LocalDateTime.now();
        System.out.println(hoy.format(formateador));
        System.out.println(ahora.format(formatoNew));

    }
}