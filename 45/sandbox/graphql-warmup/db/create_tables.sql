create table author (
  author_id serial primary key,
  author_name text
);

create table books (
  book_id serial primary key,
  book_title text
  author_id integer references author(author_id)
)