var example1 = new Vue({
    el: '#example-1',
    data: 
    {
      numbers : 0,
      cells_in_row : 10,
      prime_numbers : []
    },
    created: function()
    {
        this.numbers = 100;
        window.addEventListener('resize', this.onResize);
        this.onResize();
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
    },
    watch:
    {
        numbers: function(numbers)
        {
            this.prime_numbers = []
            for(let i = 0; i<=numbers; i++)
            {
                this.prime_numbers.push(null)
            }
        }
    },
    methods:
    {
        onResize : function()
        {
            this.cells_in_row = document.documentElement.clientWidth > 576 ? 10 : 6;
        },

        set_multiple_numbers_false: function(i)
        {
            var k = 1
            for(j=i**2; j<=this.numbers; j+=i, ++k)
            {
                if(this.prime_numbers[j]===null)
                {
                    setTimeout(this.set_false,k*100,j)
                }
                else
                {
                    --k
                }
            }    
            return k
        },

        set_false: function(i)
        {
            console.log(i)
            this.prime_numbers.splice(i, 1, false)
        },
        get_prime: function(i)
        {
            if (this.prime_numbers[i] === null && i**2<=this.numbers)
            {
                this.prime_numbers.splice(i, 1, true)
                delay_multiplier = this.set_multiple_numbers_false(i)
            }
            else if((this.prime_numbers[i] === null))
            {
                this.prime_numbers.splice(i, 1, true)
            }
            if(i<=this.numbers)
            {
                if(this.prime_numbers[i] === true && i**2<=this.numbers)
                {
                    setTimeout(this.get_prime, 100+100*delay_multiplier, ++i)    
                }
                else if(this.prime_numbers[i] === true)
                {
                    setTimeout(this.get_prime, 200, ++i)    
                }
                else
                {
                    setTimeout(this.get_prime, 0, ++i)
                }
            }
        },
        get_prime_numbers: function()
        {

            this.prime_numbers.splice(1, 1, false)
            this.prime_numbers.splice(0, 1, false)
            setTimeout(this.get_prime,100, 2)
        }
    }
  })