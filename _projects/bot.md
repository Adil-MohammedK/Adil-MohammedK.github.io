---
title: "Team Abhiyaan – Autonomous Ground Vehicle (IGVC 2023)"
layout: single
collection: projects
date: 2025-07-31
excerpt: "Developing the software stack for an autonomous ground vehicle at IIT Madras for the Intelligent Ground Vehicle Competition."
author_profile: true
header:
  teaser: /assets/images/bolt.jpg
toc: true
toc_sticky: true
---

# Team Abhiyaan

During my B.Tech–M.Tech at IIT Madras, I was part of **Team Abhiyaan**, a multidisciplinary student engineering team that designs and builds fully autonomous ground vehicles for the **Intelligent Ground Vehicle Competition (IGVC)** held annually in Michigan, USA.

Working alongside a team of nearly **30–45 students** spanning software, electronics, mechanical engineering, and business, we designed **Vikram**, our latest autonomous vehicle capable of lane following, obstacle avoidance, GPS waypoint navigation, and autonomous mission execution.

Apart from competing at IGVC, the technologies developed within Team Abhiyaan were also applied towards an autonomous campus shuttle capable of operating without human intervention.

---

# Project Overview

The objective was to develop a reliable autonomous ground vehicle capable of navigating outdoor environments while complying with the stringent safety and autonomy requirements of IGVC.

The complete system consisted of:

* ROS-based software architecture
* Stereo vision perception
* GPS and IMU based localization
* Autonomous path planning
* Differential drive control
* Custom electronics and motor control
* Independent suspension and rugged mechanical platform

The software stack was designed to be modular, allowing perception, planning and control to evolve independently while maintaining reliable system integration.

---

# My Contributions

I was a member of the **Electronics Team**, while also collaborating extensively with the **Software Team** to integrate the autonomous driving stack.

My responsibilities included:

- Designing the **Main PCB** for the autonomous vehicle
- Developing embedded interfaces for encoders, CAN communication, emergency stop, relays and power distribution
- Integrating the PCB with the Intel NUC running ROS
- Developing parts of the **ROS control stack**
- Working on autonomous navigation and vehicle control
- Supporting software integration and field testing before the IGVC competition

Working across electronics and software allowed me to understand the complete autonomous system—from sensing and low-level hardware interfaces to high-level vehicle control.

---
# Electronics Architecture

## Main PCB Design

One of my primary responsibilities was designing the **Main PCB**, which acted as the central electronics hub for Vikram.

The board integrated multiple vehicle subsystems into a single modular platform:

- Texas Instruments Tiva microcontroller
- Encoder interfaces
- CAN communication
- Power distribution from Li-ion battery pack to 24V,12V and 5V rails
- Contactor Control for motor drivers, sensors, and auxiliary systems
- Wireless Emergency Stop receiver
- Reverse polarity protection
- Fuse protection
- Power and signal isolation required for safety and reliability

The PCB was designed in **Altium Designer**, following PCB layout guidelines to reduce electromagnetic interference and improve signal integrity.

The modular architecture simplified maintenance, improved reliability, and allowed future hardware expansion.

## Adaptive Vehicle Control using SPARC

Unlike traditional PID controllers, our vehicle used **SPARC (Self-Evolving Parameter-Free Rule-Based Adaptive Controller)** for velocity control.

The controller continuously adapts to changing system dynamics without requiring manual gain tuning. 

Advantages included:

- High accuracy and performance on first startup itself.
- No manual PID tuning
- Better performance under nonlinear conditions
- Adaptive behaviour
- Robustness against varying terrain and vehicle load

The ROS control node generated wheel velocity setpoints, which were executed by the SPARC controller before being transmitted to the Roboteq motor controller.

Simulation results demonstrated that while SPARC performed similarly to PID in linear systems, it significantly outperformed PID under nonlinear conditions encountered during real-world vehicle operation.

# Software Architecture

The software stack followed a layered architecture consisting of three major modules.

## Perception

The perception pipeline processed data from:

- ZED 2i Stereo Camera
- GNSS receiver
- IMU
- Wheel encoders

The perception system generated:

- Lane detections
- Obstacle point clouds
- Pothole detection
- Ramp detection
- Occupancy costmaps

Image processing pipelines were developed using OpenCV while depth information from stereo vision was used for obstacle detection.

## Localization

Localization fused information from multiple sensors using an **Extended Kalman Filter (EKF)**.

Sensor fusion combined:

- GNSS
- Wheel encoders
- Stereo odometry
- IMU

A custom encoder covariance model was developed to improve pose estimation accuracy under varying terrain conditions.


## Planning

Navigation was implemented using layered costmaps.

Planning consisted of:

- Global A* planner
- Timed Elastic Band (TEB) local planner
- Differential drive kinematics
- Velocity command generation

The planner continuously generated collision-free trajectories while respecting the non-holonomic constraints of the vehicle.

# Autonomous Navigation Pipeline

The complete pipeline consisted of:

```
                    +----------------+
                    | ZED2i Camera   |
                    +----------------+
                            |
                    +----------------+
                    |  Perception    |
                    | Lane Detection |
                    | Obstacles      |
                    +----------------+
                            |
                            v
                  +--------------------+
                  | Layered Costmaps   |
                  +--------------------+
                            |
                            v
                  +--------------------+
                  | Global Planner     |
                  |       A*           |
                  +--------------------+
                            |
                            v
                  +--------------------+
                  | Local Planner      |
                  |    TEB Planner     |
                  +--------------------+
                            |
                            v
                  +--------------------+
                  | Velocity Controller|
                  |      SPARC         |
                  +--------------------+
                            |
                            v
                 Intel NUC (ROS)
                            |
                            |
                     Serial / CAN
                            |
                            v
                Tiva Microcontroller
                            |
                            |
                     Roboteq Driver
                            |
                            v
                    Differential Drive
```

This modular design allowed every subsystem to be independently tested and improved throughout the competition season.

---

# Reliability and Safety

Autonomous systems require robust fault handling.

To improve reliability, the software stack included:

- ROS heartbeat monitoring
- Sensor timeout detection
- Process health monitoring
- Wireless emergency stop
- Fail-safe shutdown logic
- Redundant localization

The heartbeat framework continuously monitored sensors and ROS nodes, automatically issuing warnings or safely stopping the vehicle when failures were detected.

---

# Cybersecurity

For the IGVC Cyber Challenge, our team designed a secure architecture based on the **NIST Risk Management Framework (RMF)**.

The system implemented several security controls including:

- SSH public key authentication
- HTTPS/TLS communication
- Strong access control policies
- Secure password management
- Firewall restrictions
- Network segmentation
- Secure Wi-Fi configuration
- Encrypted user data
- Security monitoring

The project highlighted the importance of integrating cybersecurity into autonomous systems rather than treating it as an afterthought.

---

# Engineering Highlights

Some notable innovations introduced in Vikram included:

- Layered ROS architecture
- Stereo vision based obstacle detection
- Spatio-temporal voxel mapping
- EKF based localization
- Differential drive autonomous navigation
- Adaptive SPARC velocity controller
- Custom battery monitoring system
- CAN-based communication
- Independent suspension
- Intelligent cooling system
- Autonomous health monitoring

---

# What I Learned

Team Abhiyaan was one of the most impactful experiences of my undergraduate studies.

Beyond software development, it taught me how large engineering projects are developed collaboratively across multiple domains.

I gained practical experience in:

- ROS
- Linux development
- Autonomous robotics
- Sensor fusion
- Computer vision
- System integration
- Embedded systems
- Git-based collaboration
- Debugging distributed robotic systems
- Cross-functional engineering teamwork

Perhaps the biggest takeaway was learning that building an autonomous vehicle is far more than writing algorithms—success depends equally on mechanical design, electronics, software architecture, testing, documentation, and effective collaboration across disciplines.

---

# Technologies

**Languages**

- C++
- Python
- Bash

**Frameworks**

- ROS
- OpenCV

**Planning**

- A*
- TEB Planner

**Localization**

- Extended Kalman Filter

**Sensors**

- ZED 2i Stereo Camera
- GNSS
- IMU
- Wheel Encoders

**Tools**

- Ubuntu
- Git
- Gazebo
- RViz
- Notion

---

# Gallery

*(Add competition photos, vehicle photos, software architecture diagrams, RViz screenshots, and testing images here.)*

---

# Related Documents

- IGVC 2023 Design Report
- IGVC 2023 Cyber Challenge Report
