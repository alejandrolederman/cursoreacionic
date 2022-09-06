export function searchCustomers() {

    if (!localStorage["customers"]) {
        localStorage["customers"] = "[]";
    }

    let customers = localStorage["customers"];
    customers = JSON.parse(customers);
    return customers;

}

export function removeCustomers(id: string) {
    let customers = searchCustomers();

    let indice = customers.findIndex((customer:any) => customer.id === id);
    customers.splice(indice, 1);
    localStorage["customers"] = JSON.stringify(customers)

}

export function saveCustomers(customer: any) {
    let customers = searchCustomers();
    customers.push(customer)
    localStorage["customers"] = JSON.stringify(customers)

}