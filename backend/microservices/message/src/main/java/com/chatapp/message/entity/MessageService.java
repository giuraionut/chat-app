package com.chatapp.message.entity;

import com.chatapp.message.dto.MessageDto;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public record MessageService(MessageRepository messageRepository, RestTemplate restTemplate) {

    public Message create(Message message) {
        return this.messageRepository.save(message);
    }

    public Message findById(UUID messageId) {
        return this.messageRepository.findById(messageId).orElseThrow();
    }

    public MessageDto.Built buildMessage(UUID messageId) {
        final Message message = this.messageRepository.findById(messageId).orElseThrow();

        return new MessageDto.Built(message.getSenderId(),
                message.getContent(),
                message.getTimestamp());

    }

    public List<MessageDto.Built> getChatHistory(UUID recipientId, UUID senderId) {
        final List<Message> chatHistory = findByRecipientAndSender(recipientId, senderId);

        List<MessageDto.Built> historyChatHistory = new ArrayList<>();
        chatHistory.forEach(message -> {
            if (message.getSenderId().equals(recipientId)) {
                historyChatHistory.add(new MessageDto.Built(senderId, message.getContent(), message.getTimestamp()));
            } else {
                historyChatHistory.add(new MessageDto.Built(recipientId, message.getContent(), message.getTimestamp()));
            }
        });
        return historyChatHistory;
    }


    public Message update(UUID id, MessageDto.Update sendReceiveMessageDto) {
        final Message oldMessage = this.findById(id);
        oldMessage.setContent(sendReceiveMessageDto.getContent());
        return this.messageRepository.save(oldMessage);
    }

    public void delete(UUID messageId) {
        final Message message = this.findById(messageId);
        this.messageRepository.delete(message);
    }

    public List<Message> findByRecipientAndSender(UUID recipientId, UUID senderId) {
        return this.messageRepository.findByRecipientIdAndSenderId(recipientId, senderId);
    }

}