package com.chatapp.group.entity;

import com.chatapp.group.components.Category;
import com.chatapp.group.components.Role;
import com.chatapp.group.components.RoleType;
import com.chatapp.group.dto.GroupDto;
import com.chatapp.group.exceptions.CustomException;
import com.chatapp.group.exceptions.ExceptionResource;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.Hibernate;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import javax.persistence.*;
import java.util.*;
import java.util.stream.Collectors;

@Entity
@Table(name = "groups")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class GroupEntity {
    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private UUID id;

    private String name;
    private String avatar;
    private UUID ownerId;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "group_id")
    @ToString.Exclude
    private List<Category> categories = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "group_id")
    @ToString.Exclude
    private List<Role> roles = new ArrayList<>();

    @ElementCollection
    @Column(name = "user_id", nullable = false)
    @CollectionTable(name = "group_users_mapping", joinColumns = @JoinColumn(name = "group_id"))
    @ToString.Exclude
    private List<UUID> usersId = new ArrayList<>();


    public List<Role> getGeneratedRoles() {
        return this.roles.stream().filter(Role::isGenerated).collect(Collectors.toList());
    }

    public GroupDto.Display toDisplay() {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        return modelMapper.map(this, GroupDto.Display.class);
    }

    public GroupDto.Update toUpdate() {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        return modelMapper.map(this, GroupDto.Update.class);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        GroupEntity groupEntity = (GroupEntity) o;
        return id != null && Objects.equals(id, groupEntity.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

    public void addCategory(Category category) {
        this.categories.add(category);
    }

    public void addUser(UUID userId) {
        this.usersId.add(userId);
    }

    public void addRole(Role role) {
        role.setType(RoleType.USER_CREATED);
        role.setGroupEntity(this);
        this.roles.add(role);
    }

    public void generateRole(Role role) {
        role.setType(RoleType.GENERATED);
        role.setGroupEntity(this);
        this.roles.add(role);
    }
}
