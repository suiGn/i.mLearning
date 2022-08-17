**Getting Started on mLearning:**

#### Connect to PostgreSQL:

```postgresql
psql -d database -U  user -W
```

Connect to a database on another host,  add  -h option:

```postgresql
psql -h host -d database -U user -W
```

Use SSL mode for the connection:

```postgresql
psql -U user -h host "dbname=db sslmode=require"
```

#### Switch connection to a new database

Once you are connected to a database, you can switch the connection to a new database under a user specified by `user`. The previous connection will be closed. If you omit the `user` parameter, the current `user` is assumed.

```postgresql
\c dbname username
```

#### List available databases:

List all databases in the current database server:

```postgresql
\l
```


