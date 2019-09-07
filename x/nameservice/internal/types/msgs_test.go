package types

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func TestMsgSetName(t *testing.T) {
	name := "maTurtle"
	value := "1"
	acc := sdk.AccAddress([]byte("me"))
	var msg = NewMsgSetName(name, value, acc)

	require.Equal(t, msg.Route(), RouterKey)
	require.Equal(t, msg.Type(), "set_name")
}

func TestMsgSetNameValidation(t *testing.T) {
	name := "maTurtle"
	value := "1"
	acc := sdk.AccAddress([]byte("me"))
	name2 := "a"
	value2 := "2"
	acc2 := sdk.AccAddress([]byte("you"))

	cases := []struct {
		valid bool
		tx    MsgSetName
	}{
		{true, NewMsgSetName(name, value, acc)},
		{true, NewMsgSetName(name2, value2, acc2)},
	}

	for _, tc := range cases {
		err := tc.tx.ValidateBasic()
		if tc.valid {
			require.Nil(t, err)
		} else {
			require.NotNil(t, err)
		}
	}
}

func TestMsgSetNameGetSignBytes(t *testing.T) {
	name := "maTurtle"
	value := "1"
	acc := sdk.AccAddress([]byte("me"))

	var msg = NewMsgSetName(name, value, acc)
	res := msg.GetSignBytes()

	expected := `{"type":"nameservice/SetName","value":{"name":"maTurtle","owner":"cosmos1d4js690r9j","value":"1"}}`

	require.Equal(t, expected, string(res))
}

func TestMsgBuyName(t *testing.T) {
	name := "maTurtle"
	coins := sdk.NewCoins(sdk.NewInt64Coin("atom", 10))
	acc := sdk.AccAddress([]byte("me"))
	var msg = NewMsgBuyName(name, coins, acc)

	require.Equal(t, msg.Route(), RouterKey)
	require.Equal(t, msg.Type(), "buy_name")
}

func TestMsgBuyNameValidation(t *testing.T) {
	name := "maTurtle"
	acc := sdk.AccAddress([]byte("me"))
	name2 := "a"
	acc2 := sdk.AccAddress([]byte("you"))
	coins := sdk.NewCoins(sdk.NewInt64Coin("atom", 10))

	cases := []struct {
		valid bool
		tx    MsgBuyName
	}{
		{true, NewMsgBuyName(name, coins, acc)},
		{true, NewMsgBuyName(name2, coins, acc2)},
	}

	for _, tc := range cases {
		err := tc.tx.ValidateBasic()
		if tc.valid {
			require.Nil(t, err)
		} else {
			require.NotNil(t, err)
		}
	}
}

func TestMsgBuyNameGetSignBytes(t *testing.T) {
	name := "maTurtle"
	acc := sdk.AccAddress([]byte("me"))
	coins := sdk.NewCoins(sdk.NewInt64Coin("atom", 10))
	var msg = NewMsgBuyName(name, coins, acc)
	res := msg.GetSignBytes()

	expected := `{"type":"nameservice/BuyName","value":{"bid":[{"amount":"10","denom":"atom"}],"buyer":"cosmos1d4js690r9j","name":"maTurtle"}}`

	require.Equal(t, expected, string(res))
}

func TestMsgDeleteName(t *testing.T) {
	name := "maTurtle"
	acc := sdk.AccAddress([]byte("me"))
	var msg = NewMsgDeleteName(name, acc)

	require.Equal(t, msg.Route(), RouterKey)
	require.Equal(t, msg.Type(), "delete_name")
}

func TestMsgDeleteNameValidation(t *testing.T) {
	name := "maTurtle"
	acc := sdk.AccAddress([]byte("me"))
	name2 := "a"
	acc2 := sdk.AccAddress([]byte("you"))

	cases := []struct {
		valid bool
		tx    MsgDeleteName
	}{
		{true, NewMsgDeleteName(name, acc)},
		{true, NewMsgDeleteName(name2, acc2)},
	}

	for _, tc := range cases {
		err := tc.tx.ValidateBasic()
		if tc.valid {
			require.Nil(t, err)
		} else {
			require.NotNil(t, err)
		}
	}
}

func TestMsgDeleteNameGetSignBytes(t *testing.T) {
	name := "maTurtle"
	acc := sdk.AccAddress([]byte("me"))
	var msg = NewMsgDeleteName(name, acc)
	res := msg.GetSignBytes()

	expected := `{"type":"nameservice/DeleteName","value":{"name":"maTurtle","owner":"cosmos1d4js690r9j"}}`

	require.Equal(t, expected, string(res))
}
