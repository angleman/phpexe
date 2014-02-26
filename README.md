# phpexe

Execute PHP from within Node

## Install

Requires PHP installed and available via your environment path.

```bash
npm install phpexe
```

## Usage

sample.php

```php
<?php
	echo "Hello"
?>
```

Node usage of sample.php


```js
var php = require('phpexe');

php('sample.php', function(error, data) {
	if (error) {
		console.log(error) // PHP error or stderr
	} else {
		console.log(data); // PHP stdout  'Hello'
	}
});

var args = ['first parameter', 'second']
php('sample.php', args, function(error, data) {
	if (error) {
		console.log(error) // PHP error or stderr
	} else {
		console.log(data); // PHP stdout  'Hello'
	}
});
```


## License 

### MIT