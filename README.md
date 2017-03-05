# Changelog Nighly Proxy

The [Changelog Nightly](https://changelog.com/nightly) doesn't host their own archive,
so I wrote this proxy that redirects to the latest version on the server.

There's a publicly available version running at http://changelog.aduffy.io

## Running it Yourself

Starting the service:

```
# Start the service
npm i
npm start

# Stopping
npm stop
```

```
# Installing the nginx proxy
cp changelog.nginx /etc/nginx/sites-available
cd /etc/nginx/sites-available
ln -s ../sites-available/changelog.nginx .

# Restart nginx
```
