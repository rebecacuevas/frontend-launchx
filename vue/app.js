const app = Vue.createApp({
    data() {
        return {
            name: 'Helena',
            surname: 'Vespa',
            email: 'vespa@email.com',
            gender: 'female',
            photo: 'https://randomuser.me/api/portraits/women/10.jpg'
        }
    },
    methods: {
        async changeAvatar() {
            const res = await fetch('https://randomuser.me/api');
            //llaves indican que es un objeto
            const { results } = await res.json();

            //console.log(results);

            this.name = results[0].name.first;
            this.surname = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.photo = results[0].picture.large;
        }
    }

})

app.mount('#app');

