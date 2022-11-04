export const CONTRACT_ADDRESS = "ZyUfp3tPg9NLr1v4FrMgvrQDosebaJURSpCPyDWBmLwoUhH";
//HxHcontract XvPNtYKDeFGyddgnHssv5joZtKVJvPrsWFgAZ1ESSeLT7LG
// Replace the below abi with the abi of the contract you deployed
export const ABI = {
	"source": {
		"hash": "0x62d27d78679f9a35f9c84f83df5f520a0f514fa2613a87e31046880aef3243e2",
		"language": "ink! 3.3.0",
		"compiler": "rustc 1.65.0-nightly"
	},
	"contract": {
		"name": "psp34_contract",
		"version": "0.1.0",
		"authors": [
			"[your_name] <[your_email]>"
		]
	},
	"V3": {
		"spec": {
			"constructors": [
				{
					"args": [
						{
							"label": "id",
							"type": {
								"displayName": [
									"Id"
								],
								"type": 1
							}
						},
						{
							"label": "name",
							"type": {
								"displayName": [
									"String"
								],
								"type": 23
							}
						},
						{
							"label": "symbol",
							"type": {
								"displayName": [
									"String"
								],
								"type": 23
							}
						}
					],
					"docs": [],
					"label": "new",
					"payable": false,
					"selector": "0x9bae9d5e"
				}
			],
			"docs": [],
			"events": [],
			"messages": [
				{
					"args": [],
					"docs": [],
					"label": "mint_token",
					"mutates": true,
					"payable": false,
					"returnType": {
						"displayName": [
							"Result"
						],
						"type": 30
					},
					"selector": "0x9144cba2"
				},
				{
					"args": [
						{
							"label": "title",
							"type": {
								"displayName": [
									"String"
								],
								"type": 23
							}
						},
						{
							"label": "author",
							"type": {
								"displayName": [
									"String"
								],
								"type": 23
							}
						},
						{
							"label": "date",
							"type": {
								"displayName": [
									"String"
								],
								"type": 23
							}
						},
						{
							"label": "cid",
							"type": {
								"displayName": [
									"String"
								],
								"type": 23
							}
						}
					],
					"docs": [],
					"label": "mint_with_attribute",
					"mutates": true,
					"payable": false,
					"returnType": {
						"displayName": [
							"Result"
						],
						"type": 30
					},
					"selector": "0x1fca19c1"
				},
				{
					"args": [
						{
							"label": "owner",
							"type": {
								"displayName": [
									"psp34_external",
									"AllowanceInput1"
								],
								"type": 8
							}
						},
						{
							"label": "operator",
							"type": {
								"displayName": [
									"psp34_external",
									"AllowanceInput2"
								],
								"type": 8
							}
						},
						{
							"label": "id",
							"type": {
								"displayName": [
									"psp34_external",
									"AllowanceInput3"
								],
								"type": 14
							}
						}
					],
					"docs": [
						" Returns `true` if the operator is approved by the owner to withdraw `id` token.",
						" If `id` is `None`, returns `true` if the operator is approved to withdraw all owner's tokens."
					],
					"label": "PSP34::allowance",
					"mutates": false,
					"payable": false,
					"returnType": {
						"displayName": [
							"psp34_external",
							"AllowanceOutput"
						],
						"type": 32
					},
					"selector": "0x4790f55a"
				},
				{
					"args": [
						{
							"label": "id",
							"type": {
								"displayName": [
									"psp34_external",
									"OwnerOfInput1"
								],
								"type": 1
							}
						}
					],
					"docs": [
						" Returns the owner of the token if any."
					],
					"label": "PSP34::owner_of",
					"mutates": false,
					"payable": false,
					"returnType": {
						"displayName": [
							"psp34_external",
							"OwnerOfOutput"
						],
						"type": 19
					},
					"selector": "0x1168624d"
				},
				{
					"args": [
						{
							"label": "owner",
							"type": {
								"displayName": [
									"psp34_external",
									"BalanceOfInput1"
								],
								"type": 8
							}
						}
					],
					"docs": [
						" Returns the balance of the owner.",
						"",
						" This represents the amount of unique tokens the owner has."
					],
					"label": "PSP34::balance_of",
					"mutates": false,
					"payable": false,
					"returnType": {
						"displayName": [
							"psp34_external",
							"BalanceOfOutput"
						],
						"type": 4
					},
					"selector": "0xcde7e55f"
				},
				{
					"args": [
						{
							"label": "to",
							"type": {
								"displayName": [
									"psp34_external",
									"TransferInput1"
								],
								"type": 8
							}
						},
						{
							"label": "id",
							"type": {
								"displayName": [
									"psp34_external",
									"TransferInput2"
								],
								"type": 1
							}
						},
						{
							"label": "data",
							"type": {
								"displayName": [
									"psp34_external",
									"TransferInput3"
								],
								"type": 7
							}
						}
					],
					"docs": [
						" Transfer approved or owned token from caller.",
						"",
						" On success a `Transfer` event is emitted.",
						"",
						" # Errors",
						"",
						" Returns `TokenNotExists` error if `id` does not exist.",
						"",
						" Returns `NotApproved` error if `from` doesn't have allowance for transferring.",
						"",
						" Returns `SafeTransferCheckFailed` error if `to` doesn't accept transfer."
					],
					"label": "PSP34::transfer",
					"mutates": true,
					"payable": false,
					"returnType": {
						"displayName": [
							"psp34_external",
							"TransferOutput"
						],
						"type": 30
					},
					"selector": "0x3128d61b"
				},
				{
					"args": [
						{
							"label": "operator",
							"type": {
								"displayName": [
									"psp34_external",
									"ApproveInput1"
								],
								"type": 8
							}
						},
						{
							"label": "id",
							"type": {
								"displayName": [
									"psp34_external",
									"ApproveInput2"
								],
								"type": 14
							}
						},
						{
							"label": "approved",
							"type": {
								"displayName": [
									"psp34_external",
									"ApproveInput3"
								],
								"type": 32
							}
						}
					],
					"docs": [
						" Approves `operator` to withdraw the `id` token from the caller's account.",
						" If `id` is `None` approves or disapproves the operator for all tokens of the caller.",
						"",
						" On success a `Approval` event is emitted.",
						"",
						" # Errors",
						"",
						" Returns `SelfApprove` error if it is self approve.",
						"",
						" Returns `NotApproved` error if caller is not owner of `id`."
					],
					"label": "PSP34::approve",
					"mutates": true,
					"payable": false,
					"returnType": {
						"displayName": [
							"psp34_external",
							"ApproveOutput"
						],
						"type": 30
					},
					"selector": "0x1932a8b0"
				},
				{
					"args": [],
					"docs": [
						" Returns the collection `Id` of the NFT token.",
						"",
						" This can represents the relationship between tokens/contracts/pallets."
					],
					"label": "PSP34::collection_id",
					"mutates": false,
					"payable": false,
					"returnType": {
						"displayName": [
							"psp34_external",
							"CollectionIdOutput"
						],
						"type": 1
					},
					"selector": "0xffa27a5f"
				},
				{
					"args": [],
					"docs": [
						" Returns current NFT total supply."
					],
					"label": "PSP34::total_supply",
					"mutates": false,
					"payable": false,
					"returnType": {
						"displayName": [
							"psp34_external",
							"TotalSupplyOutput"
						],
						"type": 6
					},
					"selector": "0x628413fe"
				},
				{
					"args": [
						{
							"label": "id",
							"type": {
								"displayName": [
									"psp34metadata_external",
									"GetAttributeInput1"
								],
								"type": 1
							}
						},
						{
							"label": "key",
							"type": {
								"displayName": [
									"psp34metadata_external",
									"GetAttributeInput2"
								],
								"type": 7
							}
						}
					],
					"docs": [
						" Returns the attribute of `id` for the given `key`.",
						"",
						" If `id` is a collection id of the token, it returns attributes for collection."
					],
					"label": "PSP34Metadata::get_attribute",
					"mutates": false,
					"payable": false,
					"returnType": {
						"displayName": [
							"psp34metadata_external",
							"GetAttributeOutput"
						],
						"type": 33
					},
					"selector": "0xf19d48d1"
				},
				{
					"args": [
						{
							"label": "account",
							"type": {
								"displayName": [
									"psp34burnable_external",
									"BurnInput1"
								],
								"type": 8
							}
						},
						{
							"label": "id",
							"type": {
								"displayName": [
									"psp34burnable_external",
									"BurnInput2"
								],
								"type": 1
							}
						}
					],
					"docs": [
						" Destroys token with id equal to `id` from `account`",
						"",
						" Caller must be approved to transfer tokens from `account`",
						" or to transfer token with `id`"
					],
					"label": "PSP34Burnable::burn",
					"mutates": true,
					"payable": false,
					"returnType": {
						"displayName": [
							"psp34burnable_external",
							"BurnOutput"
						],
						"type": 30
					},
					"selector": "0x63c9877a"
				},
				{
					"args": [
						{
							"label": "owner",
							"type": {
								"displayName": [
									"psp34enumerable_external",
									"OwnersTokenByIndexInput1"
								],
								"type": 8
							}
						},
						{
							"label": "index",
							"type": {
								"displayName": [
									"psp34enumerable_external",
									"OwnersTokenByIndexInput2"
								],
								"type": 6
							}
						}
					],
					"docs": [
						" Returns a token `Id` owned by `owner` at a given `index` of its token list.",
						" Use along with `balance_of` to enumerate all of ``owner``'s tokens."
					],
					"label": "PSP34Enumerable::owners_token_by_index",
					"mutates": false,
					"payable": false,
					"returnType": {
						"displayName": [
							"psp34enumerable_external",
							"OwnersTokenByIndexOutput"
						],
						"type": 34
					},
					"selector": "0x3bcfb511"
				},
				{
					"args": [
						{
							"label": "index",
							"type": {
								"displayName": [
									"psp34enumerable_external",
									"TokenByIndexInput1"
								],
								"type": 6
							}
						}
					],
					"docs": [
						" Returns a token `Id` at a given `index` of all the tokens stored by the contract.",
						" Use along with `total_supply` to enumerate all tokens."
					],
					"label": "PSP34Enumerable::token_by_index",
					"mutates": false,
					"payable": false,
					"returnType": {
						"displayName": [
							"psp34enumerable_external",
							"TokenByIndexOutput"
						],
						"type": 34
					},
					"selector": "0xcd0340d0"
				}
			]
		},
		"storage": {
			"struct": {
				"fields": [
					{
						"layout": {
							"struct": {
								"fields": [
									{
										"layout": {
											"cell": {
												"key": "0xba1ad52bdf66c4b31efe8d66cea66b6f6365ce24823669066601b29c4e05a571",
												"ty": 0
											}
										},
										"name": "token_owner"
									},
									{
										"layout": {
											"cell": {
												"key": "0xbb1ad52bdf66c4b31efe8d66cea66b6f6365ce24823669066601b29c4e05a571",
												"ty": 12
											}
										},
										"name": "operator_approvals"
									},
									{
										"layout": {
											"struct": {
												"fields": [
													{
														"layout": {
															"cell": {
																"key": "0xb6a71e4002c7879d26cf12fa4e7974c49d0726c7f0a89c808ab143546ccf0a4c",
																"ty": 18
															}
														},
														"name": "enumerable"
													},
													{
														"layout": {
															"enum": {
																"dispatchKey": "0xb7a71e4002c7879d26cf12fa4e7974c49d0726c7f0a89c808ab143546ccf0a4c",
																"variants": {
																	"0": {
																		"fields": [
																			{
																				"layout": {
																					"cell": {
																						"key": "0xb8a71e4002c7879d26cf12fa4e7974c49d0726c7f0a89c808ab143546ccf0a4c",
																						"ty": 15
																					}
																				},
																				"name": null
																			}
																		]
																	},
																	"1": {
																		"fields": []
																	}
																}
															}
														},
														"name": "_reserved"
													}
												]
											}
										},
										"name": "balances"
									},
									{
										"layout": {
											"enum": {
												"dispatchKey": "0xbc1ad52bdf66c4b31efe8d66cea66b6f6365ce24823669066601b29c4e05a571",
												"variants": {
													"0": {
														"fields": [
															{
																"layout": {
																	"cell": {
																		"key": "0xbd1ad52bdf66c4b31efe8d66cea66b6f6365ce24823669066601b29c4e05a571",
																		"ty": 15
																	}
																},
																"name": null
															}
														]
													},
													"1": {
														"fields": []
													}
												}
											}
										},
										"name": "_reserved"
									}
								]
							}
						},
						"name": "psp34"
					},
					{
						"layout": {
							"cell": {
								"key": "0x0000000000000000000000000000000000000000000000000000000000000000",
								"ty": 2
							}
						},
						"name": "last_token_id"
					},
					{
						"layout": {
							"cell": {
								"key": "0x0100000000000000000000000000000000000000000000000000000000000000",
								"ty": 22
							}
						},
						"name": "cid_list"
					},
					{
						"layout": {
							"struct": {
								"fields": [
									{
										"layout": {
											"cell": {
												"key": "0x67b8d3659b5eb4a0b97187fafa7fa9323b33c1b0d9f17dc78b89f4319216d42d",
												"ty": 26
											}
										},
										"name": "attributes"
									},
									{
										"layout": {
											"enum": {
												"dispatchKey": "0x68b8d3659b5eb4a0b97187fafa7fa9323b33c1b0d9f17dc78b89f4319216d42d",
												"variants": {
													"0": {
														"fields": [
															{
																"layout": {
																	"cell": {
																		"key": "0x69b8d3659b5eb4a0b97187fafa7fa9323b33c1b0d9f17dc78b89f4319216d42d",
																		"ty": 15
																	}
																},
																"name": null
															}
														]
													},
													"1": {
														"fields": []
													}
												}
											}
										},
										"name": "_reserved"
									}
								]
							}
						},
						"name": "metadata"
					}
				]
			}
		},
		"types": [
			{
				"id": 0,
				"type": {
					"def": {
						"composite": {
							"fields": [
								{
									"type": 10
								}
							]
						}
					},
					"params": [
						{
							"name": "K",
							"type": 1
						},
						{
							"name": "V",
							"type": 8
						}
					],
					"path": [
						"openbrush_lang",
						"storage",
						"mapping",
						"Mapping"
					]
				}
			},
			{
				"id": 1,
				"type": {
					"def": {
						"variant": {
							"variants": [
								{
									"fields": [
										{
											"type": 2,
											"typeName": "u8"
										}
									],
									"index": 0,
									"name": "U8"
								},
								{
									"fields": [
										{
											"type": 3,
											"typeName": "u16"
										}
									],
									"index": 1,
									"name": "U16"
								},
								{
									"fields": [
										{
											"type": 4,
											"typeName": "u32"
										}
									],
									"index": 2,
									"name": "U32"
								},
								{
									"fields": [
										{
											"type": 5,
											"typeName": "u64"
										}
									],
									"index": 3,
									"name": "U64"
								},
								{
									"fields": [
										{
											"type": 6,
											"typeName": "u128"
										}
									],
									"index": 4,
									"name": "U128"
								},
								{
									"fields": [
										{
											"type": 7,
											"typeName": "Vec<u8>"
										}
									],
									"index": 5,
									"name": "Bytes"
								}
							]
						}
					},
					"path": [
						"openbrush_contracts",
						"traits",
						"types",
						"Id"
					]
				}
			},
			{
				"id": 2,
				"type": {
					"def": {
						"primitive": "u8"
					}
				}
			},
			{
				"id": 3,
				"type": {
					"def": {
						"primitive": "u16"
					}
				}
			},
			{
				"id": 4,
				"type": {
					"def": {
						"primitive": "u32"
					}
				}
			},
			{
				"id": 5,
				"type": {
					"def": {
						"primitive": "u64"
					}
				}
			},
			{
				"id": 6,
				"type": {
					"def": {
						"primitive": "u128"
					}
				}
			},
			{
				"id": 7,
				"type": {
					"def": {
						"sequence": {
							"type": 2
						}
					}
				}
			},
			{
				"id": 8,
				"type": {
					"def": {
						"composite": {
							"fields": [
								{
									"type": 9,
									"typeName": "[u8; 32]"
								}
							]
						}
					},
					"path": [
						"ink_env",
						"types",
						"AccountId"
					]
				}
			},
			{
				"id": 9,
				"type": {
					"def": {
						"array": {
							"len": 32,
							"type": 2
						}
					}
				}
			},
			{
				"id": 10,
				"type": {
					"def": {
						"sequence": {
							"type": 11
						}
					}
				}
			},
			{
				"id": 11,
				"type": {
					"def": {
						"tuple": [
							1,
							8
						]
					}
				}
			},
			{
				"id": 12,
				"type": {
					"def": {
						"composite": {
							"fields": [
								{
									"type": 16
								}
							]
						}
					},
					"params": [
						{
							"name": "K",
							"type": 13
						},
						{
							"name": "V",
							"type": 15
						}
					],
					"path": [
						"openbrush_lang",
						"storage",
						"mapping",
						"Mapping"
					]
				}
			},
			{
				"id": 13,
				"type": {
					"def": {
						"tuple": [
							8,
							8,
							14
						]
					}
				}
			},
			{
				"id": 14,
				"type": {
					"def": {
						"variant": {
							"variants": [
								{
									"index": 0,
									"name": "None"
								},
								{
									"fields": [
										{
											"type": 1
										}
									],
									"index": 1,
									"name": "Some"
								}
							]
						}
					},
					"params": [
						{
							"name": "T",
							"type": 1
						}
					],
					"path": [
						"Option"
					]
				}
			},
			{
				"id": 15,
				"type": {
					"def": {
						"tuple": []
					}
				}
			},
			{
				"id": 16,
				"type": {
					"def": {
						"sequence": {
							"type": 17
						}
					}
				}
			},
			{
				"id": 17,
				"type": {
					"def": {
						"tuple": [
							13,
							15
						]
					}
				}
			},
			{
				"id": 18,
				"type": {
					"def": {
						"composite": {
							"fields": [
								{
									"type": 20
								}
							]
						}
					},
					"params": [
						{
							"name": "K",
							"type": 19
						},
						{
							"name": "V",
							"type": 1
						}
					],
					"path": [
						"openbrush_lang",
						"storage",
						"multi_mapping",
						"MultiMapping"
					]
				}
			},
			{
				"id": 19,
				"type": {
					"def": {
						"variant": {
							"variants": [
								{
									"index": 0,
									"name": "None"
								},
								{
									"fields": [
										{
											"type": 8
										}
									],
									"index": 1,
									"name": "Some"
								}
							]
						}
					},
					"params": [
						{
							"name": "T",
							"type": 8
						}
					],
					"path": [
						"Option"
					]
				}
			},
			{
				"id": 20,
				"type": {
					"def": {
						"sequence": {
							"type": 21
						}
					}
				}
			},
			{
				"id": 21,
				"type": {
					"def": {
						"tuple": [
							19,
							1
						]
					}
				}
			},
			{
				"id": 22,
				"type": {
					"def": {
						"composite": {
							"fields": [
								{
									"name": "offset_key",
									"type": 25,
									"typeName": "Key"
								}
							]
						}
					},
					"params": [
						{
							"name": "K",
							"type": 23
						},
						{
							"name": "V",
							"type": 24
						}
					],
					"path": [
						"ink_storage",
						"lazy",
						"mapping",
						"Mapping"
					]
				}
			},
			{
				"id": 23,
				"type": {
					"def": {
						"primitive": "str"
					}
				}
			},
			{
				"id": 24,
				"type": {
					"def": {
						"sequence": {
							"type": 23
						}
					}
				}
			},
			{
				"id": 25,
				"type": {
					"def": {
						"composite": {
							"fields": [
								{
									"type": 9,
									"typeName": "[u8; 32]"
								}
							]
						}
					},
					"path": [
						"ink_primitives",
						"Key"
					]
				}
			},
			{
				"id": 26,
				"type": {
					"def": {
						"composite": {
							"fields": [
								{
									"type": 28
								}
							]
						}
					},
					"params": [
						{
							"name": "K",
							"type": 27
						},
						{
							"name": "V",
							"type": 7
						}
					],
					"path": [
						"openbrush_lang",
						"storage",
						"mapping",
						"Mapping"
					]
				}
			},
			{
				"id": 27,
				"type": {
					"def": {
						"tuple": [
							1,
							7
						]
					}
				}
			},
			{
				"id": 28,
				"type": {
					"def": {
						"sequence": {
							"type": 29
						}
					}
				}
			},
			{
				"id": 29,
				"type": {
					"def": {
						"tuple": [
							27,
							7
						]
					}
				}
			},
			{
				"id": 30,
				"type": {
					"def": {
						"variant": {
							"variants": [
								{
									"fields": [
										{
											"type": 15
										}
									],
									"index": 0,
									"name": "Ok"
								},
								{
									"fields": [
										{
											"type": 31
										}
									],
									"index": 1,
									"name": "Err"
								}
							]
						}
					},
					"params": [
						{
							"name": "T",
							"type": 15
						},
						{
							"name": "E",
							"type": 31
						}
					],
					"path": [
						"Result"
					]
				}
			},
			{
				"id": 31,
				"type": {
					"def": {
						"variant": {
							"variants": [
								{
									"fields": [
										{
											"type": 23,
											"typeName": "String"
										}
									],
									"index": 0,
									"name": "Custom"
								},
								{
									"index": 1,
									"name": "SelfApprove"
								},
								{
									"index": 2,
									"name": "NotApproved"
								},
								{
									"index": 3,
									"name": "TokenExists"
								},
								{
									"index": 4,
									"name": "TokenNotExists"
								},
								{
									"fields": [
										{
											"type": 23,
											"typeName": "String"
										}
									],
									"index": 5,
									"name": "SafeTransferCheckFailed"
								}
							]
						}
					},
					"path": [
						"openbrush_contracts",
						"traits",
						"errors",
						"psp34",
						"PSP34Error"
					]
				}
			},
			{
				"id": 32,
				"type": {
					"def": {
						"primitive": "bool"
					}
				}
			},
			{
				"id": 33,
				"type": {
					"def": {
						"variant": {
							"variants": [
								{
									"index": 0,
									"name": "None"
								},
								{
									"fields": [
										{
											"type": 7
										}
									],
									"index": 1,
									"name": "Some"
								}
							]
						}
					},
					"params": [
						{
							"name": "T",
							"type": 7
						}
					],
					"path": [
						"Option"
					]
				}
			},
			{
				"id": 34,
				"type": {
					"def": {
						"variant": {
							"variants": [
								{
									"fields": [
										{
											"type": 1
										}
									],
									"index": 0,
									"name": "Ok"
								},
								{
									"fields": [
										{
											"type": 31
										}
									],
									"index": 1,
									"name": "Err"
								}
							]
						}
					},
					"params": [
						{
							"name": "T",
							"type": 1
						},
						{
							"name": "E",
							"type": 31
						}
					],
					"path": [
						"Result"
					]
				}
			}
		]
	}
}