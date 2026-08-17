# Write your MySQL query statement below
SELECT user_id, 
CONCAT(UPPER(Substr(name,1,1)), LOWER(Substr(name,2,LENGTH(name))))
as name
FROM Users
ORDER BY user_id;

