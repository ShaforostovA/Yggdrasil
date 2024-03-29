package com.ntgspiyggdrasil.yggdrasil.services;

import com.ntgspiyggdrasil.yggdrasil.models.ERole;
import com.ntgspiyggdrasil.yggdrasil.models.Role;
import com.ntgspiyggdrasil.yggdrasil.models.User;
import com.ntgspiyggdrasil.yggdrasil.payload.request.CreateUserRequest;
import com.ntgspiyggdrasil.yggdrasil.payload.request.UserUpdateRequest;
import com.ntgspiyggdrasil.yggdrasil.payload.response.UserInfoResponse;
import com.ntgspiyggdrasil.yggdrasil.payload.response.UserModel;
import com.ntgspiyggdrasil.yggdrasil.payload.response.UserShortModel;
import com.ntgspiyggdrasil.yggdrasil.repository.DepartmentRepository;
import com.ntgspiyggdrasil.yggdrasil.repository.RoleRepository;
import com.ntgspiyggdrasil.yggdrasil.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private DepartmentRepository departmentRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    PasswordEncoder encoder;
    public UserShortModel loadShortUserByUsername(String username) {
        return UserShortModel.toModel(userRepository.findByUsername(username).orElseThrow());
    }
    public User loadUserByUserName(String username) {
        return userRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
    }
    // админы, модератор, пользователь
    public List<UserModel> loadAllUserByDepartmentId(long departmentId) {
        return userRepository.findAllUsersDepartmentByDepartmentId(departmentId).stream().map(UserModel::toModel).collect(Collectors.toList());
    }
    // модератор
    public Page<User> loadAllUserNoModerByDepartmentId(long departmentId, String parameter, String sortField, String sortDir, int pageNumber, Boolean isActive, Date minDate, Date maxDate, String userRole, String departmentName, Boolean isState) {
        Sort sort = Sort.by(sortField);
        sort = sortDir.equals("asc") ? sort.ascending() : sort.descending();
        Pageable pageable = PageRequest.of(pageNumber - 1, 15, sort);
        return userRepository.findAllUsersDepartmentNoModerByDepartmentId(departmentId, parameter, isActive, minDate, maxDate, userRole, departmentName, isState, pageable);
    }
    // админы
    public List<UserModel> loadAllUserByFacultyId(long facultyId) {
        return userRepository.findAllUsersFacultyByFacultyId(facultyId).stream().map(UserModel::toModel).collect(Collectors.toList());
    }
    // админы
    public List<UserModel> loadAllUserNoAdmins() {
        return userRepository.findAllUsersNoAdmins().stream().map(UserModel::toModel).collect(Collectors.toList());
    }
    public Page<User> loadAllUserNoAdminsPaginate(String parameter, String sortField, String sortDir, int pageNumber, Boolean isActive, Date minDate, Date maxDate, String userRole, String departmentName, Boolean isState) {
        Sort sort = Sort.by(sortField);
        sort = sortDir.equals("asc") ? sort.ascending() : sort.descending();
        Pageable pageable = PageRequest.of(pageNumber - 1, 15, sort);
        return userRepository.findAllUsersNoAdminsPaginate(parameter, isActive, minDate, maxDate, userRole, departmentName, isState, pageable);
    }
    // тех. админ.
    public List<UserModel> loadAllUserNoSupAdmins() {
        return userRepository.findAllUsersNoSupAdmins().stream().map(UserModel::toModel).collect(Collectors.toList());
    }
    // тех. админ.
    public List<UserModel> loadAllUserNoCurrentSupAdmins(long userId) {
        return userRepository.findAllUsersNoCurrentSupAdmins(userId).stream().map(UserModel::toModel).collect(Collectors.toList());
    }
    public UserInfoResponse updateUserData(UserUpdateRequest userUpdateData) {
        userRepository.updateUserDataById(userUpdateData.getId(), userUpdateData.getAcademicDegree(), userUpdateData.getAcademicTitle(), userUpdateData.getBirthday(), userUpdateData.getEmail(), userUpdateData.getImgUrl(), userUpdateData.getJobTitle(), userUpdateData.getLastName(), userUpdateData.getName(), userUpdateData.getPatronymic(), userUpdateData.getOrcid(), userUpdateData.getPhone(), userUpdateData.getSpinCode(), userUpdateData.getState(), userUpdateData.getDepartmentId());
        return UserInfoResponse.toModal(userRepository.findById(userUpdateData.getId()).orElseThrow());
    }

    public User loadUserByUserId(long userId) {
        return userRepository.findById(userId).orElseThrow();
    }

    public Boolean checkCanCreateUserWithUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    public User createUser(CreateUserRequest userData) {
        User newUser = new User();
        Set<Role> roles = new HashSet<>();
        System.out.println(userData.getUserRole());
        if (userData.getUserRole().equals("moder")) {
            roles.add(roleRepository.findByName(ERole.ROLE_MODERATOR).orElseThrow(() -> new RuntimeException("Error: Role is not found.")));
        } else {
            roles.add(roleRepository.findByName(ERole.ROLE_USER).orElseThrow(() -> new RuntimeException("Error: Role is not found.")));
        }
        System.out.println(userData);
        newUser.setLastName(userData.getLastName());
        newUser.setName(userData.getName());
        newUser.setPatronymic(userData.getPatronymic());
        newUser.setIsState(userData.getState());
        newUser.setDepartment(departmentRepository.findById(userData.getDepartmentId()));
        newUser.setUsername(userData.getUsername());
        newUser.setPassword(encoder.encode(userData.getPassword()));
        newUser.setDateCreate(new Date());
        newUser.setDateUpdate(new Date());
        newUser.setRoles(roles);
        newUser.setIsActive(true);

        return userRepository.save(newUser);
    }

    public User updateUserStatus(long userId, Boolean isActive) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException());
        user.setIsActive(isActive);
        user.setDateUpdate(new Date());
        return userRepository.save(user);
    }

    public User updateUserPassword(long userId, String password) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException());
        user.setPassword(encoder.encode(password));
        user.setDateUpdate(new Date());
        return userRepository.save(user);
    }
}
