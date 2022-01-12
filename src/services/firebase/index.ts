import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { store } from '@/index';
import user, { userActions } from '@/store/ducks/user';

var firebaseConfig = {
	apiKey: 'AIzaSyDjRvd0H9ivBQ9v2_IbfPUHEdrrytnl7Zg',
	authDomain: 'trello-clone-76e7d.firebaseapp.com',
	projectId: 'trello-clone-76e7d',
	storageBucket: 'trello-clone-76e7d.appspot.com',
	messagingSenderId: '470997187846',
	appId: '1:470997187846:web:bcb398985e6a9b74583287'
};

const fire = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const columnsCollection = firestore.collection('columns');

export const tasksCollection = firestore.collection('tasks');

auth.onAuthStateChanged(async data => {
	if (data) {
		store.dispatch(user.actions.loginSuccessAction(data as any));
	} else {
		store.dispatch<any>(userActions.logout());
	}
});

export default fire;
