insert into author
(
  author_name
)
values
(
  $1
)
returning *;