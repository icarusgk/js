// isEmpty method check if a JTextField is empty
public static boolean isEmpty(String field) {
    if (field.equals("")) {
        return true;
    }
    else {
        return false;
    }
}

public static boolean checkUser(String username, char[] password) {
    if (username.equals(userName) && password.equals(passWord)) {
        return true;
    }
    else {
        return false;
    }
}