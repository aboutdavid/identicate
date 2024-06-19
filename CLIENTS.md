## JavaScript

```js
const identicate = new Identicate({ host: "http://identicate.hackclub.app" });

await identicate.isAllowed({
    user: "U1234567890",
    permission: "service:perm"
})

await identicate.userLookup({
    user: "U1234567890",
})

await identicate.roleLookup({
    role: "role_name",
})

await identicate.serviceLookup({
    role: "service_name",
})
```

## Python

Requires the [requests](https://pypi.org/project/requests/) library. Tested with Python 3.12.2.

```python
identicate = Identicate(host='http://identicate.hackclub.app')

is_allowed = identicate.is_allowed(user='U1234567890', permission='service:perm')
print(is_allowed)

user_info = identicate.user_lookup(user='U1234567890')
print(user_info)

role_info = identicate.role_lookup(role='role_name')
print(role_info)

service_info = identicate.service_lookup(service='service_name')
print(service_info)
```


