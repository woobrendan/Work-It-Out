INSERT INTO users (name, email, password, birthdate)
VALUES ('Matt Campbell', 'matt@gmail.com', 'test', '1995-02-17'),
('Maro Engel', 'maroe@hotmail.com', 'test', '1985-08-27'),
('Brendan Iribe', 'biribe@occulus.com', 'test', '1979-08-12'),
('Andrea Caldarelli', 'andrea@lamborghini.com','test', '1990-02-14'),
('Rafaelle Marciello', 'rm@mercedes.com', 'test', '1994-12-17');

INSERT INTO muscle_groups (name, thumbnail)
VALUES
('Chest', 'https://www.jimstoppani.com/storage/assets/00/53/1453_systemrichrich_filesrich_files000005312largechest.jpg'),
('Shoulders','https://cdn.shopify.com/s/files/1/1633/7705/files/shoulder_muscle_anatomy_large.jpg?v=1591868007'),
('Back','https://www.earthslab.com/wp-content/uploads/2017/09/superficial-layer.jpg'),
('Lower Body','https://chunkfitness.com/themes/chunkfitnessd8/img/muscle-charts/original/legs.jpg'),
('Arms', 'https://chunkfitness.com/themes/chunkfitnessd8/img/muscle-charts/original/arms.jpg');

INSERT INTO exercises (name, description, thumbnail, video, muscle_group_id)
VALUES
('Barbell Bench Press', 'The Barbell Bench Press is an upper-body weight training exercise where you push a weight upwards while lying on a weight training bench. The exercise uses the pectoralis major, the anterior deltoids, and the triceps, among other stabilizing muscles.', 'https://www.burnthefatinnercircle.com/members/images/1691.jpg', 'https://www.youtube.com/embed/CjHIKDQ4RQo', 1),
('Incline Dumbell Bench Press', 'An incline press elevates the shoulders and lowers the pelvis as if reclining in a chair. Press weights overhead and conctract by bringing hands towards shoulders. This variation of the bench press emphasizes anterior deltoids with little emphasis at the upper (clavicular) head of the pectoralis major.', 'https://www.burnthefatinnercircle.com/members/images/1749.jpg', 'https://www.youtube.com/embed/oZVCBM9f8Eo', 1),
('Cable Crossover/Cable Fly', 'The cable fly or cable crossover is a great isolation exercise that can help to build chest mass. The cables provide resistance throughout the entire movement, making it slightly more challenging than a dumbbell fly.', 
'https://viceversar.com/wp-content/uploads/2020/04/cable-crossovers..jpg', 'https://www.youtube.com/embed/QcTcWpkn_bw', 1),
('Dumbbell Shoulder Press', 'The shoulder press is a great exercise for building up your shoulders and overall upper body strength and size. With dumbbells begin with elbows out to the side, holding the dumbbell up at a 90 degree angle. Press overhead, straightening arms, ensuring not to lock out the arm. Return to starting position and repeat.','https://cdn-cccio.nitrocdn.com/sQAAylIpwgMYZgBLSXcMgCkUIbfIzHvb/assets/static/optimized/rev-b48dca6/wp-content/uploads/2020/11/shoulder-workout-at-home-with-dumbbells-490x384.jpg', 'https://www.youtube.com/embed/GLrn1vVHz24', 2),
('Lateral Raise', 'Your lateral deltoids are the middle part of your shoulder muscle, and they play a key part in your shoulder aesthetic. Lat raises are great for building stronger, bigger, and more stable shoulders. Begin with hands at sides, palm facing your body. Raise hands and weight upwards until palms are facing the ground and arms are extended, parallel to the ground.','https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Lateral-Raise_31c81eee-81c4-4ffe-890d-ee13dd5bbf20_600x600.png?v=1612138523', 'https://www.youtube.com/embed/z-kOn7flIZg', 2),
('Upright Row', 'Upright rows will assist in anterior deltoid development. Begin with a barbell, holding with hands in an overhand grip, less than shoulder width apart. Pull barbell upwards from waist up to chin area, keeping elbows flared out to the side and always above hands.','https://s3.amazonaws.com/prod.skimble/assets/1804944/image_iphone.jpg', 'https://www.youtube.com/embed/8UvsRWUb0YU', 2),
('Squats', 'Barbell squats are a great way to build lower body strength and muscle, but it is important to ensure correct squat form to avoid injuries. Ensure to keep chest upright and drive through your heels.','https://www.inspireusafoundation.org/wp-content/uploads/2020/07/muscles-targeted-by-squat.jpg', 'https://www.youtube.com/embed/kRX2NfqM90g', 4),
('Leg extension', 'The leg extension is a great way to isolate the quads and train them to failure. Use it at the beginning of your leg workout to pre-exhaust your quads, or at the end to finish them off!', 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Leg-Extension_41d91d3f-4b9c-4374-82e2-1d697ce35fe4_600x600.png?v=1612138862', 'https://www.youtube.com/embed/4ZDm5EbiFI8', 4),
('Barbell Hip Thrust', 'Adding weight to a hip thrust can help to overload the glutes and hamstrings and continue to build strength and size. The barbell is the most popular way to add weight to hip thrusts.', 'https://i.pinimg.com/originals/49/cf/5b/49cf5bf04a1e62d13ef2c2594adbd59f.png', 'https://www.youtube.com/embed/aweBS7K71l8', 4),
('Barbell Deadlift', 'The deadlift is a weight training exercise in which a loaded barbell or bar is lifted off the ground to the level of the hips, torso perpendicular to the floor, before being placed back on the ground', 'https://thumbs.dreamstime.com/b/exercising-deadlifts-barbell-bodybuilding-target-muscles-marked-red-initial-final-steps-43605848.jpg', 'https://www.youtube.com/embed/GxsLrTzyGUU', 3),
('Wide Grip Pulldown', 'The wide grip lat pulldown mainly works the lats, but the biceps, forearms, and upper back.', 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Wide-Grip-Pulldown_91fcba9b-47a2-4185-b093-aa542c81c55c_600x600.png?v=1612138105', 'https://www.youtube.com/embed/7JnP8dFbS14', 3),
('Seated Cable Row', 'This exercise works the upper, middle, and lower back', 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Cable-Row_9470fa48-f0d1-40b1-a980-caee9e6f2e53_600x600.png?v=1612138127', 'https://www.youtube.com/embed/lJoozxC0Rns', 3),
('Dumbbell Bicep Curl', 'Dumbbell bicep curl, is an isolation exercise which targets the biceps', 'https://www.burnthefatinnercircle.com/members/images/1683b.jpg?cb=20220105104735', 'https://www.youtube.com/embed/MtXdEcW3Eog', 5),
('Tricep Pushdown', 'The tricep pushdown is a variation of the tricep extension, an isolation exercise which targets the tricep muscles on the back of your upper arm. This variation uses the cable pulley machine which places a constant source of tension on the muscle, which is great for hypertrophy.', 'https://www.burnthefatinnercircle.com/members/images/1683b.jpg?cb=20220105104735', 'https://www.youtube.com/embed/LXkCrxn3caQ', 5),
('Hammer Curls', 'The hammer curl is a bicep curl variation which works the biceps, as well as the brachialis (the muscles on the outside of your arms) and the brachioradialis (the forearm). The hammer curl is great for anyone who wants to build wider arms!', 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Hammer-Curl_da9fea8b-fc81-4a4f-9af1-aea1b85239d7_600x600.png?v=1612137282', 'https://www.youtube.com/embed/B4RznoFvTl4', 5),
('Low Cable Crossover', 'Cables exercises provide constant tension on the muscles, making them an effective way to build strength. The Low Cable Crossover is a great chest isolation exercise which uses cables, making it a great exercise to include in your training when you want to build up strength and size in your chest.', 'https://fitexercises.com/images/Low-Cable-Crossover-1.png', 'https://www.youtube.com/embed/wnFEC_34Bls', 1),
('Wide Grip Push Up', 'Wide grip push ups have a wider hand placement than standard push ups, which places more emphasis on the chest.', 'https://www.mybodycreator.com/content/files/2020/09/22/482_M.png', 'https://www.youtube.com/embed/UFa702F5WnY', 1),
('Dumbbell Front Raise', 'Dumbbell front raises target your anterior deltoids (the front of your shoulders) and help to build strength and size.', 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Front-Raise_11804c3c-22d1-4589-a035-e30ad72149f3_600x600.png?v=1612138576', 'https://www.youtube.com/embed/zkP0MsTcIVU', 2),
('Shoulder Shrugs', 'The scapula and clavicle enable the movement of the entire shoulder joint up, down, backward, and forward: Elevation is the pulling of the scapulae in a superior, upward direction', 'https://i.pinimg.com/originals/18/31/0e/18310e636964f75700b468a01b69dbee.png', 'https://www.youtube.com/embed/8lP_eJvClSA', 2),
('Bent Over Row', 'The dumbbell bent over row is a staple back exercise which targets almost all of the muscles in the upper and middle back.', 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bent-Over-Rows_600x600.png?v=1619977463', 'https://www.youtube.com/embed/6gvmcqr226U', 3),
('Assisted Pull Ups', 'An assisted pull-up is a bodyweight exercise that helps you work your way up to performing a full unassisted pull-up, an advanced upper-body exercise. Assisted pull-ups are an excellent strength-training exercise that targets your chest, shoulders, arms, abdominal, and back muscles', 'https://qph.fs.quoracdn.net/main-qimg-229bbca94f2902f40278d5e8c64e92ee-lq', 'https://www.youtube.com/embed/wFj808u2HWU', 3),
('Calf Raises', 'While the calf muscles are worked to some degree in lower body compound exercises like squats, isolation exercises like calf raises will help to provide enough stimulus for the muscles to grow.', 'https://fitnessvolt.com/wp-content/uploads/2021/02/dumbbell-standing-calf-raise.jpg', 'https://www.youtube.com/embed/Zep-wKHWkNM', 4),
('Bulgarian Split Squat', 'The Bulgarian split squat is a version of a single-leg squat where the back leg is elevated on a bench or a sturdy chair. As a single-leg, unilateral squat, the exercise places a greater focus on the quadriceps than other, similar lower-body compound movements.', 'https://outdoor-fit.com/sites/default/files/2022-01/Bulgarian%20Squat.png', 'https://www.youtube.com/embed/7Aqeb8UHl4k', 4),
('Overhead Tricep Extension', 'Your triceps are the biggest muscles in your arms, so make sure not to neglect them! The overheard tricep extension is a great tricep isolation exercise.', 'https://www.spotebi.com/wp-content/uploads/2014/10/dumbbell-triceps-extension-exercise-illustration.jpg', 'https://www.youtube.com/embed/9wxRhONFsRA', 5),
('Tricep Kickback', 'The triceps are the muscles on the back of your upper arms. They start at the shoulders and run down to the elbow, and are responsible for extending the elbows. Tricep kickbacks are an isolation exercise which can help to build your tricep strength and size.', 'https://cdn.shopify.com/s/files/1/1075/8446/files/exercise-47.jpg?0', 'https://www.youtube.com/embed/JPmbMOu4IYw', 5);


INSERT INTO workout_stats(weight, reps, sets, user_id, exercise_id)
VALUES
(160, 5, 3, 1, 1),
(130, 6, 3, 1, 2),
(80, 12, 4, 1, 3),
(40, 12, 3, 1, 16),
(0, 20, 3, 1, 17),
(30, 10, 3, 2, 4),
(20, 12, 3, 2, 5),
(40, 10, 5, 2, 6),
(20, 12, 3, 2, 18),
(45, 15, 4, 2, 19),
(200, 3, 4, 5, 7),
(130, 12, 3, 5, 8),
(120, 10, 3, 5, 9),
(35, 12, 4, 5, 20),
(40, 8, 5, 5, 21);

INSERT INTO workouts(user_id, exercise_id)
VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 4),
(2, 5),
(2, 6);
