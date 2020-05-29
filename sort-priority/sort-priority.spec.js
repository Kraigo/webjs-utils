const data = [
    {
        userName: "One",
        status: "Live"
    },
    {
        userName: "Two",
        status: "Rejected"
    },
    {
        userName: "Three",
        status: "To Do"
    },
    {
        userName: "Four",
        status: "Verify"
    },
    {
        userName: "Five",
        status: "Received"
    },
    {
        userName: "Six",
        status: "In Progress"
    }
];

describe("Sort by priority", () => {

    const statusPriority = {
        'To Do': 1,
        'Received': 2,
        'In Progress': 3,
        'Rejected': 4,
        'Verify': 5,
        'Live': 6
    };    

    test('sort', () => {

        expect(data[0].status).not.toBe('To Do');

        var result = data.sort((a, b) => statusPriority[a.status] - statusPriority[b.status]);

        expect(result[0].status).toBe('To Do');
        expect(result[1].status).toBe('Received');
        expect(result[2].status).toBe('In Progress');
        expect(result[3].status).toBe('Rejected');
        expect(result[4].status).toBe('Verify');
        expect(result[5].status).toBe('Live');

    })

})
