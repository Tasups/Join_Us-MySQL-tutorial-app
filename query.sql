# EXERCISES FROM SECTION 299

#1 find the date where the first person joined
# SELECT DATE_FORMAT(created_at, '%M %D %Y')
#   AS earliest_date
#   FROM users
#   ORDER BY created_at
#   LIMIT 1;

#2 find the email of the person who joined the earliest
# SELECT email, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') AS created_at
#   FROM users
#   ORDER BY created_at
#   LIMIT 1;

#3 users according to the month that they joined DESCending month name / count
# SELECT 
#   DATE_FORMAT(created_at, '%M') AS name, 
#   COUNT(*) AS count
#   FROM users
#   GROUP BY name
#   ORDER BY count DESC
#   ;

#4 total up the number that have a yahoo account
# SELECT COUNT(*) AS yahoo_users FROM users 
#   WHERE email LIKE '%yahoo.com';

#5 total up the number of people using different email accounts such as 
  # gmail / 300, yahoo / 150, hotmail / 38, other / 12;
SELECT 
  CASE
    WHEN email LIKE '%gmail.com' THEN 'gmail'
    WHEN email LIKE '%yahoo.com' THEN 'yahoo'
    WHEN email LIKE '%hotmail.com' THEN 'hotmail'
    ELSE 'other'
  END AS provider,
  COUNT(*) AS total_users
  FROM users
  GROUP BY provider
  ORDER BY total_users DESC
  ;
  
    
  
  
  
  
  
  
  
  