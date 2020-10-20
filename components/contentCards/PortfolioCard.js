import React, { useState } from "react";
import { Text, ActivityIndicator } from "react-native";

import Card from "../Card";
import InlineText from "../InlineText";

import { fetchSingleStockChange } from "../../api/yahoo-finance-api/yahoofinance";

var changes = {};

const PortfolioCard = ({ stocks }) => {
    const [loading, setLoading] = useState(true);
    const [changes, setChanges] = useState({});

    if (loading) {
        fetchData(stocks)
            .then((value) => {
                setLoading(false);
                setChanges(value);
            })
            .catch((e) => {
                console.log("reject");
            });
    }

    return (
        <Card title='My Portfolio' titleBackground='#8A8C90'>
            {!loading ? (
                stocks.map((stock) => {
                    const change = parseFloat(changes[stock]);
                    return (
                        <InlineText
                            text={stock}
                            secondaryText='Facebook'
                            subText={(change >= 0 ? "+" : "-") + change + "%"}
                            subTextColor={change >= 0 ? "#32C307" : "#C30707"}
                            key={stock}
                        />
                    );
                })
            ) : (
                <ActivityIndicator
                    size={"large"}
                    style={{ marginVertical: 8 }}
                    color={"white"}
                />
            )}
        </Card>
    );
};

const fetchData = async (stocks) => {
    changes = {};
    for (const i in stocks) {
        try {
            let change = await fetchSingleStockChange(stocks[i]);
            changes = { ...changes, [stocks[i]]: change };
        } catch (e) {
            console.log(e);
        }
    }
    return changes;
};

export default PortfolioCard;
