# Write your MySQL query statement below
SELECT person.firstname, person.lastname, address.city, address.state
FROM Person person
LEFT JOIN Address address Using (personid)



# SELECT P.firstName, P.lastName, A.city, A.state
# FROM Person P
# LEFT JOIN Address A USING (personId)