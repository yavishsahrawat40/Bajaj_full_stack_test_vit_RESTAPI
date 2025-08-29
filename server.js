import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

function processData(data) {
    const result = {
        is_success: true,
        user_id: "yavish_sahrawat_25112003",
        email: "yavish.22bce8409@vitapstudent.ac.in",
        roll_number: "22BCE8409",
        odd_numbers: [],
        even_numbers: [],
        alphabets: [],
        special_characters: [],
    };

    let total = 0;

    data.forEach(item => {
        const str = String(item);

        // Check if it's a number
        if (!isNaN(str) && !isNaN(parseFloat(str)) && str.trim() !== '') {
            const num = parseInt(str, 10);
            total += num;

            if (num % 2 === 0) {
                result.even_numbers.push(str);
            } else {
                result.odd_numbers.push(str);
            }
        }
        // Check if it's an alphabet
        else if (/^[a-zA-Z]+$/.test(str)) {
            result.alphabets.push(str.toUpperCase());
        }
        else {
            result.special_characters.push(str);
        }
    });

    result.sum = String(total);

    const concatAlpha = result.alphabets.join('');
    const reversedString = concatAlpha.split('').reverse().join('');
    let finalString = '';
    for (let i = 0; i < reversedString.length; i++) {
        if (i % 2 === 0) { 
            finalString += reversedString[i].toUpperCase();
        } else {
            finalString += reversedString[i].toLowerCase();
        }
    }
    result.concat_string = finalString;

    return result;
}


app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;

        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                error: "Invalid input: 'data' must be an array"
            });
        }

        const result = processData(data);
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({
            is_success: false,
            error: "Internal server error"
        });
    }
});

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ message: 'BFHL API is running!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;