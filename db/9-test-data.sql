USE healthcare;

INSERT INTO `clinics` (`name`, `address`)
VALUES ('City Clinic', '123 Main Street'),
       ('Health Center', '456 Market Street');

INSERT INTO `doctors` (`first_name`, `last_name`, `clinic_id`)
VALUES ('John', 'Doe', 1),
       ('Jane', 'Smith', 1),
       ('Alice', 'Johnson', 2),
       ('Bob', 'Brown', 2);

INSERT INTO `appointments` (`doctor_id`, `patient_name`, `appointment_time`, `appointment_duration`)
VALUES (1, 'Michael Scott', '2023-05-10 09:00:00', 30),
       (1, 'Pam Beesly', '2023-05-10 10:00:00', 30),
       (2, 'Jim Halpert', '2023-05-10 14:00:00', 45),
       (3, 'Dwight Schrute', '2023-05-11 11:00:00', 60),
       (4, 'Angela Martin', '2023-05-11 13:30:00', 30);
