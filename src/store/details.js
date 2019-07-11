import axios from 'axios'


export default {
    state: {
        datails: [] // для отображения через апи
    },
    mutations: {
        updateDetails(state, details) {
            state.details = details
        }

    },
    actions: {
        changeState(context) {
            // setInterval(() => {
            //     axios.get('http://locallink.cybershell.net/stateofdevices').then((response) => {
            //   context.commit('updateMachines', response.data.data);
            // })
            // }, 3000);
            axios.get(`http://locallink.cybershell.net/packingstat?id=130`)
                .then((response) => {
                    // let data = response.data.data;
                    // let single = Object.assign(
                    //     {},
                    //     {
                    //         name: "Одинарная",
                    //         KPU: data.single_comm_fit,
                    //         paid: data.single_paid,
                    //         notPaid: data.single_not_paid,
                    //         toAccount: data.single_report
                    //     }
                    // );
                    // let double = Object.assign(
                    //     {},
                    //     {
                    //         name: "Двойная",
                    //         KPU: data.double_comm_fit,
                    //         paid: data.double_paid,
                    //         notPaid: data.double_not_paid,
                    //         toAccount: data.double_report
                    //     }
                    // );
                    // this.details.push(single, double);
                    console.log(response);
                    context.commit('updateDetails', response)
                });

            // axios.get('http://locallink.cybershell.net/stateofdevices?t=20').then((response) => {
            //     context.commit('updateDetails', response.data.data);
            // })
        }
    },
    getters: {
        details(state) {
            return state.details
        },

        dataDetails(state) {
            return state.dataDetails
        }
    }
}