export class CreateOrderDto {
    id: number;
    order_number: string;
    customer_id: number;
    order_type_id: number;
    order_status_id: number;
}