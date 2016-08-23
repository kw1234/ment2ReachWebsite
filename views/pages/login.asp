<body>
Welcome
<%
response.write(request.form("email"))
response.write(" " & request.form("psw"))
%>
</body>