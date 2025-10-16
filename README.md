# Feed Priority Toggle

A fork of [@aidistan](https://github.com/aidistan)'s [Feed Priority Shortcut](https://github.com/aidistan/freshrss-extensions)
that toggles feeds visibility between the main feed and their respective categories.

## Why?

I have been using the original extension for about two years to hide feeds in
order to avoid spoilers of sporting events. Because I only toggled between the
main feed and category visibilities, I modified it so it would only require me
a single click.

## How to install?

```sh
# Clone this repository
cd /var/www/FreshRSS/extensions
git clone --depth=1 https://github.com/axeleroy/freshrss-FeedPriorityToogle.git axeleroy-extensions

# Copy the desired extension
cp -r axeleroy-extensions/xExtension-XXX .
```

See also: https://freshrss.github.io/FreshRSS/en/admins/15_extensions.html#how-to-install

## How to upgrade?

```sh
# Update the repository
cd /var/www/FreshRSS/extensions/axeleroy-extensions
git pull
cd ..

# Remove the old version
rm -rf xExtension-XXX

# Copy the new version
cp -r axeleroy-extensions/xExtension-XXX .
```
