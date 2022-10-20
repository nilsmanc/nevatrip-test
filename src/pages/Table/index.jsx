export const Table = () => {
  return (
    <div>
      <p>phpMyAdmin</p>
      <p>Исходная таблица</p>
      <table bgcolor='#bdbcc4' cellpadding='10' rules='all'>
        <tr>
          <td>id</td>
          <td>event_id</td>
          <td>event_date</td>
          <td>ticket_adult_price</td>
          <td>ticket_adult_quantity</td>
          <td>ticket_kid_price</td>
          <td>ticket_kid_quantity</td>
          <td>barcode</td>
          <td>user_id</td>
          <td>equal_price</td>
          <td>created</td>
        </tr>
        <tr>
          <td>1</td>
          <td>003</td>
          <td> 2021-08-21 13:00:00</td>
          <td>700</td>
          <td>1</td>
          <td>450</td>
          <td>0</td>
          <td>11111111</td>
          <td>00451</td>
          <td> 700</td>
          <td>2021-01-11 13:22:09</td>
        </tr>
        <tr>
          <td>2</td>
          <td>006</td>
          <td> 2021-07-29 18:00:00</td>
          <td>1000</td>
          <td>0</td>
          <td>800</td>
          <td>2</td>
          <td>22222222</td>
          <td>00364</td>
          <td> 1600</td>
          <td> 2021-01-12 16:62:08</td>
        </tr>
        <tr>
          <td>3</td>
          <td>003</td>
          <td>2021-08-15 17:00:00</td>
          <td>700</td>
          <td>4</td>
          <td>450</td>
          <td>3</td>
          <td>33333333</td>
          <td>00015</td>
          <td>4150</td>
          <td> 2021-01-13 10:08:45</td>
        </tr>
      </table>

      <p>ticket_types</p>
      <p>
        Чтобы добавить новые типы билетов, была создана таблица ticket_types. Она нужна для
        получения цен по категориям билетов на разные мероприятия
      </p>
      <table bgcolor='#bdbcc4' cellpadding='10' rules='all'>
        <tr>
          <td>ticket_types_id</td>
          <td>type</td>
          <td>price</td>
          <td>event_id</td>
        </tr>
        <tr>
          <td>1</td>
          <td>adult</td>
          <td>700</td>
          <td>003</td>
        </tr>
        <tr>
          <td>2</td>
          <td>kid</td>
          <td>300</td>
          <td>003</td>
        </tr>
        <tr>
          <td>3</td>
          <td>group</td>
          <td>600</td>
          <td>003</td>
        </tr>
        <tr>
          <td>4</td>
          <td>preferential</td>
          <td>400</td>
          <td>003</td>
        </tr>
        <tr>
          <td>5</td>
          <td>adult</td>
          <td>800</td>
          <td>006</td>
        </tr>
        <tr>
          <td>6</td>
          <td>kid</td>
          <td>400</td>
          <td>006</td>
        </tr>
        <tr>
          <td>7</td>
          <td>group</td>
          <td>700</td>
          <td>006</td>
        </tr>
        <tr>
          <td>8</td>
          <td>preferential</td>
          <td>500</td>
          <td>006</td>
        </tr>
      </table>

      <p>ticket_info</p>
      <p>Содержит в себе данные об отдельном билете, в том числе баркод</p>
      <table bgcolor='#bdbcc4' cellpadding='10' rules='all'>
        <tr>
          <td>ticket_id</td>
          <td>ticket_types_id</td>
          <td>barcode</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>555555</td>
        </tr>
        <tr>
          <td>2</td>
          <td>4</td>
          <td>666666</td>
        </tr>
        <tr>
          <td>3</td>
          <td>2</td>
          <td>777777</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>888888</td>
        </tr>
      </table>

      <p>order</p>
      <p>Нужна, чтобы связать заказ с его билетами</p>
      <table bgcolor='#bdbcc4' cellpadding='10' rules='all'>
        <tr>
          <td>order_id</td>
          <td>ticket_id</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>2</td>
        </tr>
        <tr>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>3</td>
          <td>4</td>
        </tr>
      </table>
      <p>orders</p>
      <p>Итоговая таблица заказов</p>
      <table bgcolor='#bdbcc4' cellpadding='10' rules='all'>
        <tr>
          <td>order_id</td>
          <td>event_id</td>
          <td>event_date</td>
          <td>user_id</td>
          <td>equal_price</td>
          <td>created</td>
        </tr>
        <tr>
          <td>1</td>
          <td>003</td>
          <td>2021-08-21 13:00:00</td>
          <td>00451</td>
          <td>700</td>
          <td>2021-01-11 13:22:09</td>
        </tr>
        <tr>
          <td>2</td>
          <td>003</td>
          <td>2021-08-15 17:00:00</td>
          <td>00015</td>
          <td>700</td>
          <td>2021-01-13 10:08:45</td>
        </tr>
        <tr>
          <td>3</td>
          <td>006</td>
          <td>2021-07-29 18:00:00</td>
          <td>00364</td>
          <td>800</td>
          <td>2021-01-12 16:62:08</td>
        </tr>
      </table>
    </div>
  )
}
