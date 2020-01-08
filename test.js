var example1 = new Vue({
    el: '#example-1',
    data: 
    {
      numbers : 15,
      cells_in_row : 6
    },
    computed:
    {
        rows : function()
        {
            return Math.ceil(this.numbers / this.cells_in_row)
        },
        last_row_ceil : function()
        {
            l_r_c = this.numbers % this.cells_in_row
            if(l_r_c == 0)
            {
                l_r_c = this.cells_in_row
            }
            return l_r_c
        }
    }
  })