package com.sadithussain.calendarapp.calendarbackend.service;

import com.sadithussain.calendarapp.calendarbackend.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}
