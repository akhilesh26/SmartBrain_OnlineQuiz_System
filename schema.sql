use quiz;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `mob_no` int(11) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `password` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `quiz`(
    `id` int(5) NOT NULL AUTO_INCREMENT,
    `user_id` int(5) NOT NULL,
    `name` varchar(200) NOT NULL,
    `subject` varchar(200),
    `type` varchar(100),
    `created_at` date,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS `question`(
    `id` int(5) NOT NULL AUTO_INCREMENT,
    `quiz_id` int(5) NOT NULL,
    `question` varchar(200) NOT NULL,
    `option_1` varchar(100) NOT NULL,
    `option_2` varchar(100) NOT NULL,
    `option_3` varchar(100) NOT NULL,
    `option_4` varchar(100) NOT NULL,
    `answer` varchar(100) NOT NULL,
    `created_at` date,
    PRIMARY KEY (id),
    FOREIGN KEY (quiz_id) REFERENCES quiz(id)
);
