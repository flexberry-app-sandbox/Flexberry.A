docker build --no-cache -f SQL\Dockerfile.PostgreSql -t a/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t a/app ../..
