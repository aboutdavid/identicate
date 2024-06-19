# Identicate

`is_admin` and hard coding users for every bot are so outdated. One centralised place is awesome!

## API docs

GET `/acl/user/allowed`

Query params:

- user: Slack User ID, starts with a "U"
- permission: Service followed by a permission, i.e. `threadlocker:unlock`, or `orpheaux:play`

Sample response:

```
{
   "isAllowed": Boolean,
   "comments": String | null,
   "error": Boolean
}
```

GET `/acl/user/lookup`

Query params:

- user: Slack User ID, starts with a "U"

Sample response:

```
{
   "name": String | null,
   "comments": String | null,
   "id": String | null,
   "comments": String | null,
   "error": Boolean | null,
   "roles": [
      {
         "name": String | null,
         "id": String | null,
         "permissions": Array[String] | null
      }
   ]
}
```

GET `/acl/role/lookup`

Query params:

- role: Role ID, found in `config.js`

Sample response:

```
{
   "name": String | null,
   "comments": String | null,
   "id": String | null,
   "error": Boolean | null,
   "managers": Array[String],
   "members": Array[String],
   "roles": [
      {
         "name": String | null,
         "id": String | null,
         "permissions": Array[String] | null
      }
   ]
}
```

GET `/acl/service/lookup`

Query params:

- service: Serice ID, found in `config.js`

Sample response:

```
{
   "name": String | null,
   "id": String | null,
   "permissions": Array[String],
   "error": Boolean | null
}
```