<!-- <html>
  <head>
    <title>Scripting Tag</title>
  </head>
  <body>
    <h2>Scripting Tag</h2>
    <%! int count =3;

    String makeItLower(String data) {
      return data.toLowerCase();
    } %>

    <% 
    for(int i=1; i<=count; i++){
      out.println("java Server Pages" + i +".<br>")
    }
    %>

    <%=makeItLoser("Hello World")%>
  </body>
</html> -->

<!-- <html>
<head>
<title>Scripting Tag</title>
</head>
<body>
<%!int data = 50;%>
<%
out.println("Value of the variable is:" + data);
%>
</body>
</html> -->

<html>
<head>
<title>Scripting Tag</title>
</head>
<body>
<%!int sum(int a, int b) {
return a + b;
}%>
<%
out.println("2 + 3 = " + sum(2, 3));
%>
</body>
</html>