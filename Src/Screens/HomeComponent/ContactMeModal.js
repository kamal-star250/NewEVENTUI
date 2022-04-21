import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import CloseModal from '../../Assets/SVGFiles/close.svg';
import CallIcon from '../../Assets/SVGFiles/contactMe.svg';
import MailIcon from '../../Assets/SVGFiles/sendMail.svg';
import WhatsAppIcon from '../../Assets/SVGFiles/whatsApp.svg';
import InstagramIcon from '../../Assets/SVGFiles/instagram.svg';
import Theme from '../../Comman/Theme';

const ContactMeModal = ({openModal, closeModal}) => {
  return (
    <Modal
      isVisible={openModal}
      style={{margin: 0}}
      //   onBackdropPress={false}
      //   onBackButtonPress={false}
    >
      <View style={styles.modalCardStyle}>
        <TouchableOpacity onPress={closeModal} style={{alignSelf: 'flex-end'}}>
          <CloseModal width={25} height={30} style={{color: '#6F767E'}} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowContainer}>
          <CallIcon width={40} height={40} style={{color: '#6F767E'}} />
          <Text style={styles.textStyle}>+966 894 64045</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rowContainer}>
          <MailIcon width={40} height={40} style={{color: '#6F767E'}} />
          <Text style={styles.textStyle}>Send an email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rowContainer}>
          <WhatsAppIcon width={40} height={40} style={{color: '#6F767E'}} />
          <Text style={styles.textStyle}>Message on Whatsapp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rowContainer}>
          <InstagramIcon width={40} height={40} style={{color: '#6F767E'}} />
          <Text style={styles.textStyle}>Open on instagram</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textStyle: {
    fontFamily: Theme.Font.Bold,
    color: '#222222',
    fontWeight: '700',
    fontSize: 18,
    left: 10,
  },
  modalCardStyle: {
    width: '100%',
    height: 300,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    padding: 10,
  },
});
export default ContactMeModal;
