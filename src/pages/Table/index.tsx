import styles from './Table.module.css'

export const Table: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <b>phpMyAdmin</b>
      <p>Исходная таблица</p>
      <table className={styles.table} width='80%' bgcolor='#8f9ec1' rules='all' data-border='2'>
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

      <b>ticket_types</b>
      <p>
        Чтобы добавить новые типы билетов, была создана таблица ticket_types. Она нужна для
        получения цен по категориям билетов на разные мероприятия
      </p>
      <table className={styles.table} width='30%' bgcolor='#8f9ec1' rules='all' data-border='2'>
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
      <div className={styles.inline}>
        <b>ticket_info</b>
        <p>Содержит в себе данные о типе билета и его баркод</p>
        <table className={styles.table} width='100%' bgcolor='#8f9ec1' rules='all' data-border='2'>
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
      </div>
      <div className={styles.inline}>
        <b>order</b>
        <p>Эта таблица нужна, чтобы связать заказ с его билетами</p>
        <table className={styles.table} width='100%' bgcolor='#8f9ec1' rules='all' data-border='2'>
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
      </div>
      <p>
        <b>orders</b>
      </p>
      <p>Итоговая таблица заказов</p>
      <table className={styles.table} width='50%' bgcolor='#8f9ec1' rules='all' data-border='2'>
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
      <p>
        Таким образом, мы получаем таблицу с дополнительными типами билетов, к которым можно легко
        добавлять новые. Одновременно с этим появляется возможность добавлять несколько билетов к
        одному заказу, чтобы чекинить людей в разное время. Например, во втором заказе два билета -
        на ребенка и льготный.
      </p>
    </div>
  )
}
