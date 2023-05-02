# from sshtunnel import SSHTunnelForwarder
# import pymysql
# server = SSHTunnelForwarder(
# (＇classnet.mju.ac.kr＇,1004),
# ssh_username=＇s학번',
# ssh_password=＇비밀번호',
# remote_bind_address=('127.0.0.1',33060) )
# server.start()
# mysqlcmd = pymysql.connect( user=' s학번 ', port=server.local_bind_port, passwd='1234', host='127.0.0.1',charset='utf8’)
# sqlcur = mysqlcmd.cursor()
# sqlcur.execute("use DBs학번 ")
# sqlcur.execute("select * from XXX")
# result = sqlcur.fetchall()
# for data in result:
# print(data)
# sqlcur.close()