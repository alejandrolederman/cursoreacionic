import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
// import ExploreContainer from '../../components/ExploreContainer';
import '../Page.css';
import '../../theme/variables.css';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeCustomers, saveCustomer, searchCustomers } from './CustomerApi';

const CustomerList: React.FC = () => {

    const { name } = useParams<{ name: string; }>();

    const [clientes, setClientes] = useState<any>([]);

    const history = useHistory();

    useEffect(() => {
      search();
    }, [history.location.pathname]);

    const search = () => {
        let result = searchCustomers();
        setClientes(result);
    }

    const remove = (id: string) => {
        removeCustomers(id)
        search();

    }

    const addCustomer = () => {
        history.push('/page/customer/new');
      }

    const pruebaLocalstorange = () => {
        const ejemplo = {
            id: "1",
            fistname: "ale",
            lastname: " lederman",
            email: "algo@algo.com",
            phone: "123456789",
            addres: "maturin 2733"

        }
        saveCustomer(ejemplo);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>


                <IonContent>
                    <IonCard>
                        <IonTitle>Gestion de Cleintes</IonTitle>

                        <IonItem>
                            <IonButton onClick={addCustomer} color="primary" fill="solid" slot="end" size="default">
                                <IonIcon icon={add} />
                                Agregar Cliente
                            </IonButton>
                        </IonItem>
                        <IonGrid className="table">

                            <IonRow>
                                <IonCol>Nombre</IonCol>
                                <IonCol>Email</IonCol>
                                <IonCol>Teléfono</IonCol>
                                <IonCol>Dirección</IonCol>
                                <IonCol>Acciones</IonCol>
                            </IonRow>

                            {clientes.map((cliente: any) =>
                                <IonRow>
                                    <IonCol>{cliente.fistname} {cliente.lastname}</IonCol>
                                    <IonCol>{cliente.email}</IonCol>
                                    <IonCol>{cliente.phone}</IonCol>
                                    <IonCol>{cliente.addres}</IonCol>
                                    <IonCol>
                                        <IonButton color="primary" fill="clear">
                                            <IonIcon icon={pencil} slot="icon-only" />
                                        </IonButton>
                                        <IonButton color="danger" fill="clear" onClick={() => remove (cliente.id)}>
                                            <IonIcon icon={close} slot="icon-only" />
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            )};

                        </IonGrid>
                    </IonCard>
                    <IonButton onClick={pruebaLocalstorange} color="danger" fill="clear">
                                            prueba local storange
                                        </IonButton>

                </IonContent>

            </IonContent>
        </IonPage>
    );
};

export default CustomerList;



    //         const result = [
    //     {
    //         id: "1",
    //         fistname: "ale",
    //         lastname: " lederman",
    //         email: "algo@algo.com",
    //         phone: "123456789",
    //         addres: "maturin 2733"
    //     },
    //     {
    //         id: "2",
    //         fistname: "laura",
    //         lastname: " sanchez",
    //         email: "OTRA@COSTA.COM",
    //         phone: "987645321",
    //         addres: "triunvirato 4741"
    //     },
    //     {
    //         id: "3",
    //         fistname: "martin",
    //         lastname: " sandobal",
    //         email: "nose@queponer.com",
    //         phone: "369258147",
    //         addres: "amenabar 9513"
    //     }
    // ];
