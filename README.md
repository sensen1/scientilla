# Scientilla 2.0

## Commands

Create and start containers:

```
> ./scientilla.sh start
```

Stop running containers:

```
> ./scientilla.sh stop
```

Stop and remove containers & networks:

```
> ./scientilla.sh down
```

Stop and remove containers & networks + build or rebuild services:

```
> ./scientilla.sh build
```

View output from containers:

```
> ./scientilla.sh logs
```

### Backend container only

Restart backend service container:

```
> ./scientilla.sh restartb
> ./scientilla.sh restart-backend
```

View output from backend container:

```
> ./scientilla.sh logsb
> ./scientilla.sh logs-backend
```

Execute /bin/sh command in backend container:

```
> ./scientilla.sh bashb
> ./scientilla.sh bash-backend
```

Execute npm command in backend container:

```
> ./scientilla.sh npmb
> ./scientilla.sh npm-backend
```

### Frontend container only

Restart frontend service container:

```
> ./scientilla.sh restartf
> ./scientilla.sh restart-frontend
```

View output from frontend container:

```
> ./scientilla.sh logsf
> ./scientilla.sh logs-frontend
```

Execute /bin/sh command in frontend container:

```
> ./scientilla.sh bashf
> ./scientilla.sh bash-frontend
```

Execute npm command in frontend container:

```
> ./scientilla.sh npmf
> ./scientilla.sh npm-frontend
```
