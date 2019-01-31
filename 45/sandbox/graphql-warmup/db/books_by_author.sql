select * 
from books
join author
on books.author_id = author.author_id
where books.author_id = $1